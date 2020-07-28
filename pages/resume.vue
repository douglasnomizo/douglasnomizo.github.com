<template>
  <div class="flex flex-col m-4">
    <nuxt-link to="/">Back</nuxt-link>
    <main>
      <ThemeSwitcher />
      <Resume :resume="resume" :theme="theme" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    resume() {
      return this.$store.state.resume
    },
    theme() {
      const themes = this.$store.state.theme
      return themes[themes.selected]
    },
  },
})
</script>
