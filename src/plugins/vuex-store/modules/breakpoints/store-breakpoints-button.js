import vuetify from '../../../vuetify/Vuetify.js'

export default {
    namespaced: true,

    state: {
        breakpoint: vuetify.framework.breakpoint
    },

    getters: {
        md: (state) => {
            if(state.breakpoint.mdAndDown)
                return 'py-4 px-3';
            else if(state.breakpoint.lg)
                return 'py-5 px-4';
            else if(state.breakpoint.xl)
                return 'py-6 px-5';
        },

        lg: (state) => {
            if(state.breakpoint.mdAndDown)
                return 'py-5 px-4';
            else if(state.breakpoint.lg)
                return 'py-7 px-5';
            else if(state.breakpoint.xl)
                return 'py-8 px-6';
        }
    }
}
