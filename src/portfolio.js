/*
|--------------------------------------------------------------------------
| APP ENTRY POINT
|--------------------------------------------------------------------------
| The entry script for the Single Page Application (SPA)
|
*/

// --- IMPORTS -----------------------------------------------------------
// const Portfolio = () => import('./Portfolio.vue');
// import router  from './plugins/vue-router/Router.js';
// import store   from './plugins/vuex-store/Store.js';
// import vuetify from './plugins/vuetify/Vuetify.js';

// components
import Portfolio from './Portfolio.vue';

// composables
import { createApp } from 'vue';

// plugins
import router from './plugins/vue-router/Router.js';
import store  from './plugins/vuex-store/Store.js'
import vuetify from './plugins/vuetify/Vuetify.js';



// --- APP INSTANCE ------------------------------------------------------
// const app = new Vue({
//     el     : '#main',
//     router : router,
//     store  : store,
//     vuetify: vuetify,
//     render : h => h(Portfolio)
// });

const app = createApp(Portfolio);

app
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#main');
