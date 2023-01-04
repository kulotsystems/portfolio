/*
|--------------------------------------------------------------------------
| VUEX STORE MODULE: navigation
|--------------------------------------------------------------------------
|
*/

export default {
    namespaced: true,

    state: {
        mainMenu: {
            active: 'overview',
            items : [
                {
                    text: 'OVERVIEW',
                    name: 'overview',
                    icon: 'mdi-account-circle'
                },
                {
                    text: 'PROJECTS',
                    name: 'projects',
                    icon: 'mdi-view-grid'
                },
                {
                    text: 'CONTACT',
                    name: 'contact',
                    icon: 'mdi-message-text'
                }
            ]
        },

        sidebar: {
            opened: false,
            loaded: false
        }
    },

    getters: {
        mainMenuActive: (state) => {
            return state.mainMenu.active;
        },

        mainMenuItems: (state) => {
            return state.mainMenu.items;
        },

        sidebarOpened: (state) => {
            return state.sidebar.opened;
        },

        sidebarLoaded: (state) => {
            return state.sidebar.loaded;
        }
    },

    mutations: {
        setActiveMainMenu: (state, name) => {
            state.mainMenu.active = name;
        },

        openSidebar: (state) => {
            state.sidebar.opened = true;
        },

        closeSidebar: (state) => {
            state.sidebar.opened = false;
        },

        loadSidebar: (state) => {
            state.sidebar.loaded = true;
        }
    }
}
