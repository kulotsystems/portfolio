/*
|--------------------------------------------------------------------------
| VUEX STORE MODULE: pull-requests
|--------------------------------------------------------------------------
|
*/

import ronhedwig from './reviews/ron-hedwig.js';
import ruel from "./reviews/ruel.js";

export default {
    namespaced: true,

    state: {
        reviews: {
            michael  : 'https://github.com/kulotsystems/portfolio/pull/7',
            florencio: 'https://github.com/kulotsystems/portfolio/pull/11',
            junjun   : 'https://github.com/kulotsystems/portfolio/pull/25',
            ivan     : 'https://github.com/kulotsystems/portfolio/pull/38',
            kylie    : 'https://github.com/kulotsystems/portfolio/pull/80',
            ronhedwig: 'https://github.com/kulotsystems/portfolio/pull/98',
            ruel     : 'https://github.com/kulotsystems/portfolio/pull/128'
        }
    },

    getters: {
        reviews: (state) => {
            return state.reviews;
        }
    }
}
