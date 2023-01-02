import vuetify from '../../../vuetify/Vuetify.js'

export default {
    namespaced: true,

    state: {
        breakpoint: vuetify.display
    },

    getters: {
        height: (state) => {
            if(state.breakpoint.smAndDown)
                return 48;
            else if(state.breakpoint.md || state.breakpoint.lg)
                return 64
            else
                return 80;
        }
    }
}
