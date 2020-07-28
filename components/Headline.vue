<template>
  <div>
    <div class="text-center antialiased my-3">
      <div class="text-2xl font-bold font-mono">{{ profile.name }}</div>
      <div>{{ profile.headline }}</div>
    </div>
    <div class="uppercase font-bold my-2">Summary</div>
    <div class="text-sm text-justify my-2">{{ profile.summary }}</div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Profile } from '../types'
export default Vue.extend({
  props: {
    profile: {
      type: Object,
      required: true,
    } as PropOptions<Profile>,
  },
  data() {
    return {
      main: this.profile,
    }
  },
})
</script>