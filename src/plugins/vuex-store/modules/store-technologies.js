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
                url : 'https://www.w3schools.com/html'
            },
            css: {
                text: 'CSS',
                url : 'https://www.w3schools.com/css'
            },
            bootstrap: {
                text: 'Bootstrap',
                url : 'https://getbootstrap.com'
            },
            javascript: {
                text: 'JavaScript',
                url : 'https://www.w3schools.com/js'
            },
            jquery: {
                text: 'jQuery',
                url : 'https://jquery.com'
            },
            php: {
                text: 'PHP',
                url : 'https://www.w3schools.com/php'
            },
            mysql: {
                text: 'MySQL',
                url : 'https://www.mysql.com'
            },
            vue: {
                text: 'Vue',
                url : 'https://vuejs.org'
            },
            react: {
                text: 'React',
                url : 'https://reactjs.org'
            },
            vuetify: {
                text: 'Vuetify',
                url : 'https://vuetifyjs.com/en'
            },
            laravel: {
                text: 'Laravel',
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
