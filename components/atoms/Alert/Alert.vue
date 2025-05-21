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
    case 'warning':
      return 'alert-warning'
    case 'success':
      return 'alert-success'
    case 'info':
      return 'alert-info'
    case 'error':
      return 'alert-error'
    default:
      return 'bg-base-100 text-base-content border'
  }
})

const icon = computed(() => {
  switch (props.variant) {
    case 'warning':
      return 'warning'
    case 'success':
      return 'check_circle'
    case 'info':
      return 'info'
    case 'error':
      return 'cancel'
    default:
      return 'add_circle'
  }
})
</script>

<template>
  <div class="alert items-start gap-3" :class="variantClass">
    <slot name="icon">
      <span class="material-symbols-outlined text-lg mt-0.5">
        {{ icon }}
      </span>
    </slot>

    <div>
      <h3 class="leading-tight">
        <slot name="title">
          {{ title }}
        </slot>
      </h3>
      <div class="text-base text-neutral-400">
        <slot />
      </div>
    </div>

    <slot name="close">
      <button class="mt-0.5 ml-auto" @click="emit('close')">
        <span class="material-symbols-outlined text-lg">close</span>
      </button>
    </slot>
  </div>
</template>
