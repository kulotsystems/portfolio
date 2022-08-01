<template>
    <v-app>
        <topbar/>
        <sidebar/>
        <v-main>
            <router-view/>
        </v-main>
        <bottom-nav-menu v-if="$vuetify.breakpoint.xsOnly"/>
        <dialogs/>
    </v-app>
</template>

<script>
    export default {
        name: 'Portfolio',
        components: {
            'topbar'         : () => import('./components/navs/TopBar.vue'),
            'sidebar'        : () => import('./components/navs/Sidebar.vue'),
            'bottom-nav-menu': () => import('./components/navs/BottomNavMenu.vue'),
            'dialogs'        : () => import('./components/dialogs/Dialogs.vue')
        },
        data() {
            return {
                sidebar: {
                    opened: false
                }
            }
        },
        computed: {},
        methods : {

        }
    }
</script>

<style>
    .v-card--hover {
        cursor: text !important;
    }

    p.text-body-1 {
        line-height: 28px !important;
    }

    p.text-body-2 {
        line-height: 23px !important;
    }

    p.text-h6 {
        line-height: 33px !important;
    }
</style>
