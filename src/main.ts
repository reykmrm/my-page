import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { faHtml5} from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';
import router from './router';
import store from './store';

library.add(faUserSecret, faHtml5);
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
