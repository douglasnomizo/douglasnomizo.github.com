import { storiesOf } from '@storybook/vue'
import Picture from '../components/Picture.vue'

storiesOf('Picture', module)
  .add('Default', () => ({
    components: { Picture },
    template: '<Picture />',
  }))
  .add('With Picture', () => ({
    components: { Picture },
    template: '<Picture src="/static/profile.png"/>',
  }))
