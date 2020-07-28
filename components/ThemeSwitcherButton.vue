<template>
  <button class="btn" :style="styleObject" @click.prevent="onclick">
    <slot />
  </button>
</template>

<style>
.btn {
  @apply w-full font-semibold py-2 px-3 border rounded shadow;
}

button {
  color: var(--color);
  background-color: var(--bg);
  border-color: var(--border-color);
}

button:hover {
  background-color: var(--bg-secondary);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 1);
}
</style>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Theme } from '../types'

export default Vue.extend({
  props: {
    theme: {
      type: Object,
      required: true,
    } as PropOptions<Theme>,
    onclick: {
      type: Function,
      required: true,
    },
  },
  computed: {
    styleObject() {
      const theme: Theme = this.theme
      return {
        '--bg': theme.bg,
        '--color': theme.color,
        '--bg-secondary': theme.bgSecondary,
        '--border-color': theme.borderColor,
      }
    },
  },
})
</script>