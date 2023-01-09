<template>
    <nav>
        <v-navigation-drawer
            app
            v-model="$store.state.navigation.sidebar.opened"
            :permanent="$vuetify.breakpoint.mdAndUp"
            :width="width"
            overlay-opacity="0.1"
            :class="{
                'grey lighten-5': $store.getters.isLightMode && !$vuetify.breakpoint.mdAndUp,
                'dark darken-2' : $store.getters.isDarkMode  && !$vuetify.breakpoint.mdAndUp,
                'transparent'   : $vuetify.breakpoint.mdAndUp
            }"
            :dark="$store.getters.isDarkMode"
            floating
            style="height: 100%"
        >
            <v-app-bar flat :height="$store.getters['breakpoints/appbar/height']" :class="{ 'primary white--text':  $store.getters.isLightMode, 'dark darken-2 grey--text':  $store.getters.isDarkMode }" :dark="$store.getters.isDarkMode">
                <v-spacer v-if="$vuetify.breakpoint.mdAndUp" />
                <v-app-bar-title :class="$store.getters['breakpoints/font/h3']">
                    {{ $store.getters.appName }}
                </v-app-bar-title>
                <v-spacer v-if="$vuetify.breakpoint.mdAndUp"/>
            </v-app-bar>
            <profile/>
            <template v-slot:append>
                <div class="pa-3 d-flex justify-center">
                    <v-switch
                        v-model="isDarkMode"
                        label="Dark Mode"
                        inset
                        flat
                        dense
                        @change="toggleTheme"
                        class="text-button"
                    />
                </div>
            </template>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: 'Sidebar',
        components: {
            'profile': () => import('../cards/Profile.vue')
        },
        data() {
            return {
                isDarkMode: false
            }
        },
        computed: {
            width() {
                if(this.$vuetify.breakpoint.mdAndDown)
                    return 256;
                else if(this.$vuetify.breakpoint.lg)
                    return 320;
                else
                    return 384;
            }
        },
        methods : {
            toggleTheme() {
                if(this.isDarkMode)
                    this.$store.commit('goDark');
                else
                    this.$store.commit('goLight');
            }
        },
        created() {
            this.isDarkMode = this.$store.getters.isDarkMode;
        }
    }
</script>

<style>
    .v-app-bar-title__content {
        width: 100% !important;
    }
</style>
