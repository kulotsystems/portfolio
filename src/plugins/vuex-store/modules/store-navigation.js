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
                    icon: 'space_dashboard'
                },
                {
                    text: 'PROJECTS',
                    name: 'projects',
                    icon: 'grid_view'
                },
                {
                    text: 'CONTACT',
                    name: 'contact',
                    icon: 'message'
                }
            ]
        },

        sidebar: {
            opened: false
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
        }
    }
}
