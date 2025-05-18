<template>
  <div
      class="tw:alert tw:items-start tw:gap-3"
      :class="variantClass"
  >
    <slot name="icon">
      <span class="material-symbols-outlined tw:text-lg tw:mt-0.5">
        {{ icon }}
      </span>
    </slot>

    <div>
      <h3 class="tw:leading-tight">
        <slot name="title">{{ title }}</slot>
      </h3>
      <div class="tw:text-base tw:text-neutral-400">
        <slot />
      </div>
    </div>

    <slot name="close">
      <button class="tw:ml-auto tw:mt-0.5" @click="emit('close')">
        <span class="material-symbols-outlined tw:text-lg">close</span>
      </button>
    </slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'neutral',
    validator: v => ['warning', 'success', 'info', 'error', 'neutral'].includes(v),
  },
  title: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['close'])

const variantClass = computed(() => {
  switch (props.variant) {
    case 'warning': return 'tw:alert-warning'
    case 'success': return 'tw:alert-success'
    case 'info': return 'tw:alert-info'
    case 'error': return 'tw:alert-error'
    default: return 'tw:bg-base-100 tw:text-base-content tw:border'
  }
})

const icon = computed(() => {
  switch (props.variant) {
    case 'warning': return 'warning'
    case 'success': return 'check_circle'
    case 'info': return 'info'
    case 'error': return 'cancel'
    default: return 'add_circle'
  }
})
</script>
