import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faSquareJs,
  faVuejs,
  faCss3Alt,
  faJava,
  faPython,
  faWhatsapp,
  faFacebook,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faUserSecret,
  faHtml5,
  faSquareJs,
  faFacebook,
  faInstagram,
  faGithub,
  faVuejs,
  faCss3Alt,
  faJava,
  faDatabase,
  faPython,
  faWhatsapp,
);
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
