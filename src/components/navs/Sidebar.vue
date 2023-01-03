<template>
    <nav>
        <v-navigation-drawer
            app
            v-model="$store.state.navigation.sidebar.opened"
            :permanent="$vuetify.display.mdAndUp"
            :width="width"
            overlay-opacity="0.1"
            class="grey lighten-5"
            floating
        >
            <profile/>
            <!--<template v-slot:append v-if="$vuetify.display.smAndUp && windowHeight >= 640">
                <side-nav-menu class="mb-5"/>
            </template>-->
        </v-navigation-drawer>
    </nav>
</template>

<script>
    import { defineAsyncComponent } from 'vue';

    export default {
        name: 'Sidebar',
        components: {
            'profile'      : defineAsyncComponent(() => import('../cards/Profile.vue')),
            // 'side-nav-menu': defineAsyncComponent(() => import('./SideNavMenu.vue'))
        },
        data() {
            return {
                // https://stackoverflow.com/questions/54166847/how-to-access-the-window-object-in-vue-js
                windowHeight: window.innerHeight
            }
        },
        computed: {
            width() {
                if(this.$vuetify.display.mdAndDown)
                    return 256;
                else if(this.$vuetify.display.lg)
                    return 320;
                else
                    return 384;
            },
        },
        methods : {
            // onResize() {
            //     this.windowHeight = window.innerHeight
            // }
        },
        mounted() {
            this.$nextTick(() => {
                // window.addEventListener('resize', this.onResize);
                if(this.$vuetify.display.mdAndUp)
                    this.$store.commit('navigation/openSidebar');
            });
        },
        beforeDestroy() {
            // window.removeEventListener('resize', this.onResize);
        }
    }
</script>

<style>
    .v-app-bar-title__content {
        width: 100% !important;
    }
</style>
