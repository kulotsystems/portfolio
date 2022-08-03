<template>
    <nav>
        <v-navigation-drawer
            app
            v-model="$store.state.navigation.sidebar.opened"
            :permanent="$store.getters['breakpoints/sidebar/permanent']"
            :width="$store.getters['breakpoints/sidebar/width']"
            overlay-opacity="0.1"
            class="grey lighten-5"
            floating
        >
            <v-app-bar color="primary" class="white--text" flat :height="$store.getters['breakpoints/appbar/height']">
                <v-spacer v-if="$vuetify.breakpoint.mdAndUp" />
                <v-app-bar-title>
                    {{ $store.getters.appName }}
                </v-app-bar-title>
                <v-spacer v-if="$vuetify.breakpoint.mdAndUp"/>
            </v-app-bar>
            <profile/>
            <!--<template v-slot:append v-if="$vuetify.breakpoint.smAndUp && windowHeight >= 640">
                <side-nav-menu class="mb-5"/>
            </template>-->
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: 'Sidebar',
        components: {
            'profile'      : () => import('../cards/Profile.vue'),
            // 'side-nav-menu': () => import('./SideNavMenu.vue')
        },
        data() {
            return {
                // https://stackoverflow.com/questions/54166847/how-to-access-the-window-object-in-vue-js
                windowHeight: window.innerHeight
            }
        },
        computed: {},
        methods : {
            // onResize() {
            //     this.windowHeight = window.innerHeight
            // }
        },
        mounted() {
            // this.$nextTick(() => {
            //     window.addEventListener('resize', this.onResize);
            // });
        },
        beforeDestroy() {
            // window.removeEventListener('resize', this.onResize);
        }
    }
</script>

<style scoped>

</style>
