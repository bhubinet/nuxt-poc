import type { UseFetchOptions } from '#app'
import type { Ref } from 'vue'
import type { FetchAllData, FetchItemData } from '~~/types/api'
import type { PagedCollection } from '~~/types/collection'
import type { SubmissionErrors } from '~~/types/error'
import type { Item } from '~~/types/item'
import type { View } from '~~/types/view'

const MIME_TYPE = 'application/ld+json'

const config = useRuntimeConfig()

async function useApi<T>(path: string, options: UseFetchOptions<T>) {
  const response = await useFetch(path, {
    baseURL: config.ENTRYPOINT,

    mode: 'cors',

    headers: {
      Accept: MIME_TYPE,
    },

    onResponseError({ response }) {
      const data = response._data
      const error = data['hydra:description'] || response.statusText

      throw new Error(error)
    },

    ...options,
  })

  return response
}

export async function useFetchList<T>(
  resource: string,
): Promise<FetchAllData<T>> {
  const route = useRoute()

  const items: Ref<T[]> = ref([])
  const view: Ref<View | undefined> = ref(undefined)

  const page = ref(route.params.page)

  const { data, pending, error } = await useApi<T>(resource, {
    params: { page },

    // onResponse({ response }) {},
  })

  const value = data.value as PagedCollection<T>
  items.value = value['hydra:member']
  view.value = value['hydra:view']

  return {
    items,
    view,
    isLoading: pending,
    error,
  }
}

export async function useFetchItem<T>(path: string): Promise<FetchItemData<T>> {
  const retrieved: Ref<T | undefined> = ref(undefined)

  const { data, pending, error } = await useApi<T>(path, {
    onResponse({ response }) {
      retrieved.value = response._data
    },
  })

  retrieved.value = data.value as T

  return {
    retrieved,
    isLoading: pending,
    error,
  }
}

export async function useCreateItem<T>(resource: string, payload: Item) {
  const created: Ref<T | undefined> = ref(undefined)
  const violations: Ref<SubmissionErrors | undefined> = ref(undefined)

  const { data, pending, error } = await useApi(resource, {
    method: 'POST',
    body: payload,

    onResponseError({ response }) {
      const data = response._data
      const error = data['hydra:description'] || response.statusText

      if (!data.violations)
        throw new Error(error)

      const errors: SubmissionErrors = { _error: error }
      data.violations.forEach(
        (violation: { propertyPath: string, message: string }) => {
          errors[violation.propertyPath] = violation.message
        },
      )

      violations.value = errors

      throw new SubmissionError(errors)
    },
  })

  created.value = data.value as T

  return {
    created,
    isLoading: pending,
    error,
    violations,
  }
}

export async function useUpdateItem<T>(item: Item, payload: Item) {
  const updated: Ref<T | undefined> = ref(undefined)
  const violations: Ref<SubmissionErrors | undefined> = ref(undefined)

  const { data, pending, error } = await useApi(item['@id'] ?? '', {
    method: 'PUT',
    body: payload,
    headers: {
      'Accept': MIME_TYPE,
      'Content-Type': MIME_TYPE,
    },

    onResponseError({ response }) {
      const data = response._data
      const error = data['hydra:description'] || response.statusText

      if (!data.violations)
        throw new Error(error)

      const errors: SubmissionErrors = { _error: error }
      data.violations.forEach(
        (violation: { propertyPath: string, message: string }) => {
          errors[violation.propertyPath] = violation.message
        },
      )

      violations.value = errors

      throw new SubmissionError(errors)
    },
  })

  updated.value = data.value as T

  return {
    updated,
    isLoading: pending,
    error,
    violations,
  }
}

export async function useDeleteItem(item: Item) {
  const error: Ref<string | undefined> = ref(undefined)

  if (!item?.['@id']) {
    error.value = 'No item found. Please reload'
    return {
      error,
    }
  }

  const { pending } = await useApi(item['@id'] ?? '', { method: 'DELETE' })

  return {
    isLoading: pending,
    error,
  }
}
