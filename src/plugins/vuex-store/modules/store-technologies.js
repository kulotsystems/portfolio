/*
|--------------------------------------------------------------------------
| VUEX STORE MODULE: technologies
|--------------------------------------------------------------------------
|
*/

export default {
    namespaced: true,

    state: {
        stacks: {
            html: {
                text: 'HTML',
                icon: 'mdi-language-html5',
                url : 'https://www.w3schools.com/html',
            },
            css: {
                text: 'CSS',
                icon: 'mdi-language-css3',
                url : 'https://www.w3schools.com/css'
            },
            bootstrap: {
                text: 'Bootstrap',
                icon: 'mdi-bootstrap',
                url : 'https://getbootstrap.com'
            },
            javascript: {
                text: 'JavaScript',
                icon: 'mdi-language-javascript',
                url : 'https://www.w3schools.com/js'
            },
            jquery: {
                text: 'jQuery',
                icon: 'mdi-jquery',
                url : 'https://jquery.com'
            },
            php: {
                text: 'PHP',
                icon: 'mdi-language-php',
                url : 'https://www.w3schools.com/php'
            },
            mysql: {
                text: 'MySQL',
                icon: 'mdi-database',
                url : 'https://www.mysql.com'
            },
            vue: {
                text: 'Vue',
                icon: 'mdi-vuejs',
                url : 'https://vuejs.org'
            },
            react: {
                text: 'React',
                icon: 'mdi-react',
                url : 'https://reactjs.org'
            },
            vuetify: {
                text: 'Vuetify',
                icon: 'mdi-vuetify',
                url : 'https://vuetifyjs.com/en'
            },
            laravel: {
                text: 'Laravel',
                icon: 'mdi-laravel',
                url : 'https://laravel.com'
            }
        }
    },

    getters: {
        stacks: (state) => {
            return state.stacks;
        }
    }
}
