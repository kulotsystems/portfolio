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
        </v-navigation-drawer>
    </nav>
</template>

<script>
    import { defineAsyncComponent } from 'vue';

    export default {
        name: 'Sidebar',
        components: {
            'profile': defineAsyncComponent(() => import('../cards/Profile.vue')),
        },
        data() {
            return {

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

        },
        mounted() {
            this.$nextTick(() => {
                if(this.$vuetify.display.mdAndUp)
                    this.$store.commit('navigation/openSidebar');
            });
        }
    }
</script>

<style>

</style>
