<template>
    <v-app>
        <topbar/>
        <sidebar/>
        <v-main class="grey lighten-3">
            <v-container>
                <router-view/>
            </v-container>
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

<style scoped>

</style>
