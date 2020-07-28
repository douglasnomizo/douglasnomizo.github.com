<template>
  <div class="my-3 grid grid-cols-4 sm:gap-1 md:gap-4">
    <ThemeSwitcherButton :theme="themes.default" :onclick="() => selectTheme('default')">Default</ThemeSwitcherButton>
    <ThemeSwitcherButton :theme="themes.sepia" :onclick="() => selectTheme('sepia')">Sepia</ThemeSwitcherButton>
    <ThemeSwitcherButton :theme="themes.dark" :onclick="() => selectTheme('dark')">Dark</ThemeSwitcherButton>
    <ThemeSwitcherButton
      :theme="themes[themes.selected]"
      class="gradient text-white"
      :onclick="() => newPallete()"
    >Random</ThemeSwitcherButton>
  </div>
</template>


<style>
button.gradient {
  background-image: linear-gradient(
    150deg,
    red,
    orange,
    blue,
    indigo,
    green,
    yellow,
    violet
  );
  transform: rotate(0deg);
}
</style>

<script lang="ts">
import Vue from 'vue'
import iwanthue from 'iwanthue'

export default Vue.extend({
  computed: {
    themes() {
      return this.$store.state.theme
    },
  },
  methods: {
    selectTheme(name: string) {
      this.$store.commit('theme/select', name)
    },
    newPallete() {
      this.$store.commit('theme/select', 'default')
      // Improve logic to generate beautiful palletes
      const palette = iwanthue(6)
      this.$store.commit('theme/apply', {
        color: palette[0],
        colorPrimary: palette[1],
        colorSecondary: palette[2],
        bg: palette[3],
        bgSecondary: palette[4],
        borderColor: palette[5],
      })
    },
    async randomTheme() {
      const { data } = await this.$axios({
        method: 'post',
        url: '/colorapi/',
        headers: { 'Access-Control-Allow-Origin': '*' },
        data: '{"model":"ui"}',
      })
      const values = data.result.map(
        ([red, green, blue]: any) => `rgb(${red}, ${green}, ${blue})`
      )
      this.$store.commit('theme/apply', {
        color: values[0],
        colorPrimary: values[1],
        colorSecondary: values[2],
        bg: values[3],
        bgSecondary: values[4],
        borderColor: values[5],
      })
    },
  },
})
</script>