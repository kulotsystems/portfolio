<template>
    <v-app-bar app flat :height="$store.getters['breakpoints/appbar/height']" :class="{ 'primary white--text':  !$vuetify.theme.dark, 'light darken-2 grey--text':  $vuetify.theme.dark }">
        <v-row>
            <v-container class="pa-0 pr-md-5 pr-xl-4 fill-height">
                <v-app-bar-nav-icon
                    v-if="!$store.getters['navigation/sidebarOpened']"
                    dark
                    @click="$store.commit('navigation/openSidebar')"
                    :class="{ 'grey--text': $vuetify.theme.dark }"
                />
                <v-app-bar-title v-if="!$store.getters['navigation/sidebarOpened']" :class="$store.getters['breakpoints/font/h3']">
                    {{ $store.getters.appName }}
                </v-app-bar-title>
                <v-spacer/>
                <top-button-menu   v-if="$vuetify.breakpoint.smAndUp"/>
                <top-dropdown-menu v-else/>
            </v-container>
        </v-row>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'TopBar',
        components: {
            'top-button-menu'  : () => import('./TopButtonMenu.vue'),
            'top-dropdown-menu': () => import('./TopDropdownMenu.vue')
        },
        data() {
            return {}
        },
        computed: {},
        methods: {}
    }
</script>

<style>
    .v-app-bar-title__content{
        text-overflow: clip;
        overflow: visible;
    }
</style>
