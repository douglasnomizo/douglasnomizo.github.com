<template>
  <div class="w-7/12 mx-auto">
    <div
      class="ratio flex-shrink relative overflow-hidden min-h-4 rounded-full shadow-md border-4 border-double border-gray-200"
    >
      <img class="absolute h-full w-full" alt="Hovered Profile Image" :src="hovered" />
      <img
        class="absolute h-full w-full hover:opacity-0 transition duration-1s ease-in-out"
        :src="main"
        alt="Profile Image"
      />
    </div>
  </div>
</template>

<style>
div.ratio {
  padding-bottom: 100%;
}
</style>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Avatar } from '../types'
export default Vue.extend({
  props: {
    avatar: {
      type: Object,
      required: true,
    } as PropOptions<Avatar>,
  },
  data() {
    return {
      main: this.avatar.primary,
      hovered: this.avatar.secondary,
    }
  },
})
</script>