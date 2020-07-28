<template>
  <div class="my-3 flex flex-column justify-between text-lg">
    <div v-for="(s, index) in computedSocial" :key="index">
      <div class="capitalize m-1 cursor-pointer">
        <a rel="noreferrer" :title="s.type | capitalize" :href="s.url" target="_blank">
          <font-awesome-icon :icon="s.icon" class="mr-1" />
        </a>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Social, ContactType } from '../types'
export default Vue.extend({
  props: {
    social: {
      type: Array,
      required: true,
    } as PropOptions<Social>,
  },
  computed: {
    computedSocial() {
      return this.social.map(({ type, value }) => {
        let url = value
        let icon
        switch (type) {
          case ContactType.LINKEDIN:
            icon = ['fab', 'linkedin']
            break
          case ContactType.GITHUB:
            icon = ['fab', 'github']
            break
          case ContactType.EMAIL:
            icon = ['fa', 'envelope']
            url = 'mailto:' + value
            break
          case ContactType.PHONE:
            icon = ['fa', 'phone']
            url = 'tel:' + value
            break
          case ContactType.LOCATION:
            icon = ['fa', 'map-marker']
            break
        }
        return { url, icon, type }
      })
    },
  },
})
</script>