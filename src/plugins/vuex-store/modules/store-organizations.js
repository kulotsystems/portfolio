/*
|--------------------------------------------------------------------------
| VUEX STORE MODULE: open-source organizations
|--------------------------------------------------------------------------
|
*/

export default {
    namespaced: true,

    state: {
        organizations: {
            'kulotsystemstech': {
                handle: 'kulotsystemstech',
                name  : 'Kulot Systems',
                link  : 'https://github.com/kulotsystemstech',
                avatar: 'https://avatars.githubusercontent.com/kulotsystemstech'
            },
            'aclc-iriga': {
                handle: 'aclc-iriga',
                name  : 'ACLC College Iriga',
                link  : 'https://github.com/aclc-iriga',
                avatar: 'https://avatars.githubusercontent.com/aclc-iriga'
            }
        }
    },

    getters: {
        all: (state) => {
            return state.organizations;
        },

        total: (state) => {
            return Object.keys(state.organizations).length;
        }
    }
}
