<template>
  <div
    class="grid sm:grid-cols-2 md:grid-cols-12 border-solid rounded-md border-black border overflow-hidden shadow-2xl"
  >
    <div
      :style="{ backgroundColor: theme.bgSecondary, color: theme.colorSecondary }"
      class="p-4 sm:col-span-2 md:col-span-4"
    >
      <Avatar :avatar="profile.avatar" />
      <Social :social="profile.social" class="my-3" />
      <hr class="my-4" />
      <Headline :profile="profile" />
      <hr class="my-4" />
      <div class="my-3">
        <div class="uppercase font-bold my-2">Skills</div>
        <ul>
          <li v-for="({ name, experience }, idx) in skills" :key="idx">{{ name }}</li>
        </ul>
      </div>
    </div>
    <div
      :style="{ backgroundColor: theme.bg, color: theme.color  }"
      class="p-4 flex flex-col sm:col-span-2 md:col-span-8"
    >
      <Experience :experience="resume.experience" :theme="theme" />
    </div>
  </div>
</template>

<script>
</script>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Resume, Theme } from '../types'
export default Vue.extend({
  props: {
    resume: {
      type: Object,
      required: true,
    } as PropOptions<Resume>,
    theme: {
      type: Object,
      required: true,
    } as PropOptions<Theme>,
  },
  data: function () {
    return {
      profile: this.resume.profile,
      skills: this.resume.skills,
    }
  },
})
</script>