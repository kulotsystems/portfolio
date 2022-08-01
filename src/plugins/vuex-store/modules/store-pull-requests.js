/*
|--------------------------------------------------------------------------
| VUEX STORE MODULE: pull-requests
|--------------------------------------------------------------------------
|
*/

export default {
    namespaced: true,

    state: {
        reviews: {
            michael  : 'https://github.com/kulotsystems/portfolio/pull/7',
            florencio: 'https://github.com/kulotsystems/portfolio/pull/11',
            junjun   : 'https://github.com/kulotsystems/portfolio/pull/25'
        }
    },

    getters: {
        reviews: (state) => {
            return state.reviews;
        }
    }
}
