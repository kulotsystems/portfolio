import vuetify from '../../../vuetify/Vuetify.js'

export default {
    namespaced: true,

    state: {
        breakpoint: vuetify.framework.breakpoint
    },

    getters: {
        width: (state) => {
            if(state.breakpoint.smAndDown)
                return 256;
            if(state.breakpoint.md)
                return 352;
            else if(state.breakpoint.lg)
                return 512;
            else
                return 512;
        },

        permanent: (state) => {
            return state.breakpoint.mdAndUp;
        }
    }
}
