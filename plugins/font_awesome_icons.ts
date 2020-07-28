import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons/faMapMarker'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

library.add(faEnvelope, faPhone, faLinkedin, faGithub, faMapMarker)

Vue.component('font-awesome-icon', FontAwesomeIcon)
