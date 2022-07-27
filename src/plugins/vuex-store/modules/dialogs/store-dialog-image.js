export default {
    namespaced: true,

    state: {
        opened : false,
        title  : '',
        image  : null
    },

    getters: {
        state: (state) => {
            return state
        }
    },

    mutations: {
        show(state, payload) {
            state.opened  = true;
            state.title   = '';
            state.image   = null;

            if(payload) {
                if(payload.title)
                    state.title = payload.title;
                if(payload.image)
                    state.image = payload.image;
            }
        },

        hide(state) {
            state.opened = false;
        }
    }
}
