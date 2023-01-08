<template>
    <v-app>
        <topbar/>
        <sidebar/>
        <v-main class="grey lighten-5">
            <router-view/>
        </v-main>
        <bottom-nav-menu v-if="$vuetify.display.xs"/>
        <dialog-loader/>
        <dialog-image/>
    </v-app>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import TopBar  from './components/navs/TopBar.vue';
    import Sidebar from './components/navs/Sidebar.vue';
    import DialogLoader from './components/dialogs/DialogLoader.vue';

    export default {
        name: 'Portfolio',
        components: {
            'topbar'         : TopBar,
            'sidebar'        : Sidebar,
            'dialog-loader'  : DialogLoader,
            'dialog-image'   : defineAsyncComponent(() => import('./components/dialogs/DialogImage.vue')),
            'bottom-nav-menu': defineAsyncComponent(() => import('./components/navs/BottomNavMenu.vue')),
        },
        data() {
            return {
                sidebar: {
                    opened: false
                }
            }
        },
        computed: {},
        watch   : {
            $route: {
                immediate: true,
                handler(to, from) {
                    if(this.$route.meta.title !== undefined) {
                        let title = `${ this.$store.getters.appName } | ${ this.$route.meta.title }`;
                        if (to.name === 'projects') {
                            if (to.params.slug)
                                title += ` ~ ${ this.$store.getters['projects/all'][to.params.slug].title }`;
                        }
                        document.title = title;
                    }
                }
            }
        },
        methods : {

        }
    }
</script>

<style>
    .grecaptcha-badge {
        display: none;
    }

    a {
        text-decoration: none;
    }

    .v-card--hover {
        cursor: text !important;
    }

    .v-card-subtitle {
        white-space: normal !important;
    }

    p.text-body-2, .text-body-2 p {
        line-height: 25px !important;
    }

    p.text-body-1, .text-body-1 p {
        line-height: 28px !important;
    }

    p.text-h6, .text-h6 p{
        line-height: 33px !important;
    }

    p.text-h5, .text-h5 p {
        line-height: 43px !important;
    }

    .thumbnail .v-image__image {
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
    }

    .theme--light.v-card>.v-card__text,
    .theme--light.v-card>.v-card__subtitle {
        color: #5b5b5b;
    }

    .v-btn.v-size--x-large {
        font-size: 1.1rem;
    }
</style>
