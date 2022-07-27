/*
|--------------------------------------------------------------------------
| VUETIFY
|--------------------------------------------------------------------------
| An instance of the User Interface Framework for the SPA
|
*/

import '@fontsource/roboto';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

import Twitter    from '../../components/svgs/Twitter.vue';
import Facebook   from '../../components/svgs/Facebook.vue';
import GitHub     from '../../components/svgs/GitHub.vue';
import HTML       from '../../components/svgs/HTML.vue';
import CSS        from '../../components/svgs/CSS.vue';
import JavaScript from '../../components/svgs/JavaScript.vue';
import PHP        from '../../components/svgs/PHP.vue';
import VueJS      from '../../components/svgs/VueJS.vue';
import React      from '../../components/svgs/React.vue';
import VuetifyJS  from '../../components/svgs/VuetifyJS.vue';
import Laravel    from '../../components/svgs/Laravel.vue';
import MySQL      from '../../components/svgs/MySQL.vue';
import jQuery     from '../../components/svgs/jQuery.vue';
import Bootstrap  from '../../components/svgs/Bootstrap.vue';

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg',
        values: {
            twitter: {
                component: Twitter
            },
            facebook: {
                component: Facebook
            },
            github: {
                component: GitHub
            },
            html: {
                component: HTML
            },
            css: {
                component: CSS
            },
            bootstrap: {
                component: Bootstrap
            },
            javascript: {
                component: JavaScript
            },
            jquery: {
                component: jQuery
            },
            php: {
                component: PHP
            },
            mysql: {
                component: MySQL
            },
            vue: {
                component: VueJS
            },
            react: {
                component: React
            },
            vuetify: {
                component: VuetifyJS
            },
            laravel: {
                component: Laravel
            },
        },
    },
    theme: {
        themes: {
            light: {
                primary  : '#363062',
                secondary: '#ac4cbc',
                success  : '#68cf29',
                info     : '#3a82ef',
                warning  : '#ffab2d',
                error    : '#f72b50',
                light    : '#c8c8c8',
                dark     : '#444444'
            }
        }
    }
});


