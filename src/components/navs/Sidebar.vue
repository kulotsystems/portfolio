<template>
    <nav>
        <v-navigation-drawer
            app
            v-model="$store.state.navigation.sidebar.opened"
            :permanent="$vuetify.breakpoint.mdAndUp"
            :width="width"
            overlay-opacity="0.1"
            :class="{
                'grey lighten-5': !$vuetify.breakpoint.mdAndUp && !$vuetify.theme.dark,
                'light darken-2': !$vuetify.breakpoint.mdAndUp && $vuetify.theme.dark,
                'transparent'   : $vuetify.breakpoint.mdAndUp
            }"
            floating
            style="height: 100%"
        >
            <v-app-bar flat :height="$store.getters['breakpoints/appbar/height']" :class="{ 'primary white--text':  !$vuetify.theme.dark, 'light darken-2 grey--text':  $vuetify.theme.dark }">
                <v-spacer v-if="$vuetify.breakpoint.mdAndUp" />
                <v-app-bar-title :class="$store.getters['breakpoints/font/h3']">
                    {{ $store.getters.appName }}
                </v-app-bar-title>
                <v-spacer v-if="$vuetify.breakpoint.mdAndUp"/>
            </v-app-bar>
            <profile/>
            <template v-slot:append>
                <div class="pa-3 d-flex justify-center">
                    <v-btn block text large @click="switchClick">
                        <v-switch
                            v-model="isDarkMode"
                            label="Dark Mode"
                            inset
                            flat
                            dense
                            @click.stop="switchChange"
                            color="dark"
                            :ripple="false"
                        />
                    </v-btn>
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
                if(this.isDarkMode) {
                    this.$store.commit('goDark');
                    this.$vuetify.theme.dark = true;
                }
                else {
                    this.$store.commit('goLight');
                    this.$vuetify.theme.dark = false;
                }
            },
            switchClick() {
                this.isDarkMode = !this.isDarkMode;
                this.toggleTheme();
            },
            switchChange() {
                this.toggleTheme();
            }
        },
        created() {
            this.isDarkMode = this.$store.getters.isDarkMode;
            this.$vuetify.theme.dark = this.isDarkMode;
        }
    }
</script>

<style>
    .v-app-bar-title__content {
        width: 100% !important;
    }
</style>
