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
    export default {
        name: 'Portfolio',
        components: {
            'topbar'         : () => import('./components/navs/TopBar.vue'),
            'sidebar'        : () => import('./components/navs/Sidebar.vue'),
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

    .text-body-1,
    .text-sm-body-1,
    .text-md-body-1,
    .text-lg-body-1,
    .text-xl-body-1 {
        line-height: 28px !important;
    }

    .text-body-2,
    .text-sm-body-2,
    .text-md-body-2,
    .text-lg-body-2,
    .text-xl-body-2 {
        line-height: 25px !important;
    }

    .text-h6,
    .text-sm-h6,
    .text-md-h6,
    .text-lg-h6,
    .text-xl-h6 {
        line-height: 35px !important;
    }

    .thumbnail .v-image__image {
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
    }

    .theme--light.v-card>.v-card__text,
    .theme--light.v-card>.v-card__subtitle {
        color: #5b5b5b;
    }
</style>
