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
    a {
        text-decoration: none;
    }

    .v-card--hover {
        cursor: text !important;
    }

    p.text-body-1,
    p.text-sm-body-1,
    p.text-md-body-1,
    p.text-lg-body-1 {
        line-height: 28px !important;
    }

    p.text-body-2,
    p.text-sm-body-2,
    p.text-md-body-2,
    p.text-lg-body-2 {
        line-height: 26px !important;
    }

    p.text-h6,
    p.text-sm-h6,
    p.text-md-h6,
    p.text-lg-h6 {
        line-height: 33px !important;
    }
</style>
