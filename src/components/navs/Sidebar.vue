<template>
    <nav>
        <v-navigation-drawer
            app
            v-model="$store.state.navigation.sidebar.opened"
            :permanent="$vuetify.breakpoint.mdAndUp"
            floating
            overlay-opacity="0.1"
        >
            <v-app-bar color="info" class="white--text" flat :dense="$vuetify.breakpoint.smAndDown">
                <v-app-bar-title>
                    {{ $store.getters.appName }}
                </v-app-bar-title>
            </v-app-bar>
            <profile/>
            <template v-slot:append v-if="$vuetify.breakpoint.smAndUp">
                <side-nav-menu class="mb-5"/>
            </template>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: 'Sidebar',
        components: {
            'profile'      : () => import('../cards/Profile.vue'),
            'side-nav-menu': () => import('./SideNavMenu.vue')
        },
        data() {
            return {

            }
        },
        computed: {},
        methods: {}
    }
</script>

<style scoped>

</style>
