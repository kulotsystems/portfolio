<template>
    <v-app>
        <topbar/>
        <sidebar/>
        <v-main class="grey lighten-5">
            <router-view/>
        </v-main>
        <bottom-nav-menu v-if="$vuetify.breakpoint.xsOnly"/>
        <dialogs/>
    </v-app>
</template>

<script>
    import TopBar  from './components/navs/TopBar.vue';
    import Sidebar from './components/navs/Sidebar.vue';

    export default {
        name: 'Portfolio',
        components: {
            'topbar'         : TopBar,
            'sidebar'        : Sidebar,
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
        watch   : {
            $route: {
                immediate: true,
                handler(to, from) {
                    let title = `${this.$store.getters.appName} | ${this.$route.meta.title}`;
                    if(to.name === 'projects') {
                        if(to.params.slug)
                            title += ` ~ ${this.$store.getters['projects/all'][to.params.slug].title}`;
                    }
                    document.title = title;
                }
            }
        },
        methods : {

        }
    }
</script>

<style>
    a {
        text-decoration: none;
    }

    .v-card--hover {
        cursor: text !important;
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
