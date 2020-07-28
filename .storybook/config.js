import { configure } from '@storybook/vue'
import Vue from 'vue'
import List from '../components/list/List.vue'

Vue.component('List', List)

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
