<template>
    <v-app-bar color="primary" class="text-white" app flat :height="$store.getters['breakpoints/appbar/height']">
        <div class="pa-0 pr-md-5 pr-xl-4 fill-height d-flex align-center w-100">
            <v-app-bar-nav-icon
                v-if="$vuetify.display.smAndDown"
                @click="toggleSidebar"
                dark
            />
            <v-app-bar-title :class="$store.getters['breakpoints/font/h3']">
                {{ $store.getters.appName }}
            </v-app-bar-title>
            <v-spacer/>
            <top-button-menu v-if="$vuetify.display.smAndUp"/>
            <top-dropdown-menu v-else/>
        </div>
    </v-app-bar>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    export default {
        name: 'TopBar',
        components: {
            'top-button-menu'  : defineAsyncComponent(() => import('./TopButtonMenu.vue')),
            'top-dropdown-menu': defineAsyncComponent(() => import('./TopDropdownMenu.vue'))
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            toggleSidebar() {
                if(!this.$store.getters['navigation/sidebarOpened'])
                    this.$store.commit('navigation/openSidebar');
                else
                    this.$store.commit('navigation/closeSidebar');
            }
        }
    }
</script>

<style>
    .v-app-bar-title__content{
        text-overflow: clip;
        overflow: visible;
    }
</style>
