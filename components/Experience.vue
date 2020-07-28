<template>
  <div>
    <div class="uppercase font-bold text-xl my-2">Experience</div>
    <div v-for="(exp, index) in experience" :key="index" class="mb-2">
      <div class="flex flex-row justify-between items-center my-4" :style="{ color: theme.color }">
        <div class="flex flex-row">
          <img class="w-6 shadow-md border-gray border" :src="exp.logo" :alt="exp.company" />
          <span class="ml-2 font-bold">{{ exp.position }}</span>
        </div>
        <hr class="h-1" />
        <span class="font-mono text-sm">{{ exp.from }} - {{ exp.to }}</span>
      </div>
      <ul>
        <li v-for="(text, idx) in exp.description" :key="idx" class="text-sm antialiased">{{ text }}</li>
      </ul>
    </div>
  </div>
</template>



<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Experience, Theme } from '../types'
export default Vue.extend({
  props: {
    experience: {
      type: Array,
      required: true,
    } as PropOptions<Array<Experience>>,
    theme: {
      type: Object,
      required: true,
    } as PropOptions<Theme>,
  },
})
</script>