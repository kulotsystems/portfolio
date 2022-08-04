import vuetify from '../../../vuetify/Vuetify.js'

export default {
    namespaced: true,

    state: {
        breakpoint: vuetify.framework.breakpoint
    },

    getters: {
        h1: (state) => {
            if(state.breakpoint.smAndDown)
                return 'text-h4';
            else if(state.breakpoint.md || state.breakpoint.lg)
                return 'text-h3';
            else
                return 'text-h2';
        },

        h2: (state) => {
            if(state.breakpoint.smAndDown)
                return 'text-h5';
            else if(state.breakpoint.md || state.breakpoint.lg)
                return 'text-h4';
            else
                return 'text-h3';
        },

        h3: (state) => {
            if(state.breakpoint.smAndDown)
                return 'text-h6';
            else if(state.breakpoint.md || state.breakpoint.lg)
                return 'text-h5';
            else
                return 'text-h4';
        },


        p: (state) => {
            if(state.breakpoint.smAndDown)
                return 'text-body-1';
            else if(state.breakpoint.md || state.breakpoint.lg)
                return 'text-h6';
            else
                return 'text-h5';
        },

        small: (state) => {
            if(state.breakpoint.smAndDown)
                return 'text-body-2';
            else if(state.breakpoint.md || state.breakpoint.lg)
                return 'text-body-1';
            else
                return 'text-h6';
        },

        xSmall: (state) => {
            if(state.breakpoint.smAndDown)
                return 'text-subtitle-1';
            else if(state.breakpoint.md || state.breakpoint.lg)
                return 'text-body-2';
            else
                return 'text-body-1';
        },
    }
}
