/*
|--------------------------------------------------------------------------
| VUE ROUTER
|--------------------------------------------------------------------------
| An instance of the vue-router that defines all the SPA front-end routes.
|
*/


import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    base  : '/portfolio',
    routes: [
        {
            path     : '/',
            name     : 'overview',
            component: () => import('../../views/Overview.vue'),
            meta     : {
                title: 'Overview'
            }
        },
        {
            path     : '/projects/:slug?',
            name     : 'projects',
            component: () => import('../../views/Projects.vue'),
            meta     : {
                title: 'Projects'
            }
        },
        {
            path     : '/contact',
            name     : 'contact',
            component: () => import('../../views/Contact.vue'),
            meta     : {
                title: 'Contact'
            }
        }
    ]
});
