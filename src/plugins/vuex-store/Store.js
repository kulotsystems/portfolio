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
import technologies from './modules/store-technologies.js';
import reviews      from './modules/store-reviews.js';
import pullRequests from './modules/store-pull-requests.js';
import breakpoints  from './modules/store-breakpoints.js';
import transitions  from './modules/store-transitions.js';

// detect dark mode
const isDarkMode = () => {
    if (!window.matchMedia)
        return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default new Vuex.Store({

    state: {
        app: {
            name : 'kulotsystems',
            theme: localStorage.getItem('theme')
                       ? localStorage.getItem('theme')
                       : (isDarkMode ? 'dark' : 'light')
        },
        profile: {
            name: {
                title     : '',
                firstName : 'Arvic',
                middleName: 'Salcedo',
                lastName  : 'Babol',
                nameSuffix: '',
            },
            position: 'Full-Stack Web Developer and Dedicated Tech Educator',
            socials : {
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
        isLightMode: (state) => {
            return state.app.theme === 'light';
        },
        isDarkMode: (state) => {
            return state.app.theme === 'dark';
        },
        profile: (state) => {
            return state.profile;
        },
        fullName: (state) => {
            let name     = state.profile.name;
            let fullName = '';
            if(name.title !== '')
                fullName += `${name.title} `;
            fullName += `${name.firstName} `;
            if(name.middleName !== '')
                fullName += `${name.middleName.substr(0, 1)}. `;
            fullName += `${name.lastName}`;
            if(name.nameSuffix !== '')
                fullName += ` ${name.nameSuffix}`;
            return fullName;
        }
    },

    mutations: {
        goto: (state, url) => {
            window.open(url, '_blank');
        },
        goLight: (state) => {
            state.app.theme = 'light';
            localStorage.setItem('theme', state.app.theme);
        },
        goDark: (state) => {
            state.app.theme = 'dark';
            localStorage.setItem('theme', state.app.theme);
        }
    },

    actions: {

    },

    modules: {
        dialog,
        projects,
        navigation,
        technologies,
        reviews,
        pullRequests,
        breakpoints,
        transitions
    }

});




