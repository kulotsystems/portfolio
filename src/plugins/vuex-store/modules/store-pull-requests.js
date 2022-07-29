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
            michael: 'https://github.com/kulotsystems/portfolio/pull/7',
        }
    },

    getters: {
        reviews: (state) => {
            return state.reviews;
        }
    }
}
