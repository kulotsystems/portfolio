/*
|--------------------------------------------------------------------------
| VUEX STORE
|--------------------------------------------------------------------------
| An instance of the vuex-store that serves as the SPA centralized storage
|
*/


import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


// --- MODULES ------------------------------------------------------------
import dialog       from './modules/store-dialog.js';
import projects     from './modules/store-projects.js';
import navigation   from './modules/store-navigation.js';
import technologies from './modules/store-technologies.js'


export default new Vuex.Store({

    state: {
        app: {
            name: 'kulotsystems'
        },
        profile: {
            name : 'Arvic S. Babol',
            title: 'Web Developer / Educator',
            socials: {
                Twitter : 'https://twitter.com/kulotsystems',
                Facebook: 'https://web.facebook.com/kulotsystem',
                Github  : 'https://github.com/kulotsystems',
            }
        }
    },

    getters: {
        appName: (state) => {
            return state.app.name;
        },
        profile: (state) => {
            return state.profile;
        }
    },

    mutations: {

    },

    actions: {

    },

    modules: {
        dialog,
        projects,
        navigation,
        technologies
    }

});




