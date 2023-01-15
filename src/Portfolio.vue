<template>
    <v-app :class="{ 'mdi-loading': mdiLoading }">
        <div class="topbar-backdrop"></div>
        <topbar/>
        <sidebar/>
        <v-main :class="{ 'grey lighten-5': !$vuetify.theme.dark, 'light darken-3': $vuetify.theme.dark }">
            <router-view/>
            <v-icon ref="mdi-init" style="visibility: hidden">dashboard</v-icon>
        </v-main>
        <bottom-nav-menu v-if="$vuetify.breakpoint.xsOnly"/>
        <dialog-loader/>
        <dialog-image/>
    </v-app>
</template>

<script>
    import TopBar  from './components/navs/TopBar.vue';
    import Sidebar from './components/navs/Sidebar.vue';
    import DialogLoader from './components/dialogs/DialogLoader.vue';

    export default {
        name: 'Portfolio',
        components: {
            'topbar'         : TopBar,
            'sidebar'        : Sidebar,
            'dialog-loader'  : DialogLoader,
            'dialog-image'   : () => import('./components/dialogs/DialogImage.vue'),
            'bottom-nav-menu': () => import('./components/navs/BottomNavMenu.vue'),
        },
        data() {
            return {
                sidebar: {
                    opened: false
                },
                mdiLoading: true
            }
        },
        computed: {},
        watch   : {
            $route: {
                immediate: true,
                handler(to, from) {
                    if(this.$route.meta.title !== undefined) {
                        let title = `${this.$store.getters.appName} | ${this.$route.meta.title}`;
                        if(to.name === 'projects') {
                            if(to.params.slug)
                                title += ` ~ ${this.$store.getters['projects/all'][to.params.slug].title}`;
                        }
                        document.title = title;
                    }
                }
            }
        },
        methods : {

        },
        mounted() {
            // check if material-design-icons is loaded
            const mdiInit = this.$refs['mdi-init'];
            const loaded = () => {
                const width = mdiInit.$el.offsetWidth;
                if(width <= 50) {
                    mdiInit.$el.remove();
                    this.mdiLoading = false;
                    return true;
                }
                return false;
            }
            if(!loaded()) {
                const mdiTmr = setInterval(() => {
                    if(loaded())
                        clearInterval(mdiTmr);
                }, 60);
            }

            // show a glimpse of sidebar on xs-screen on first load
            if(this.$vuetify.breakpoint.smAndDown && this.$route.name === 'overview') {
                setTimeout(() => {
                    this.$store.commit('navigation/openSidebar');
                    setTimeout(() => {
                        this.$store.commit('navigation/closeSidebar');
                    }, 2048);
                }, 128);
            }
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

    .mdi-loading .material-icons {
        color: transparent !important;
    }

    .v-application.theme--light {
        background: #fafafa;
    }

    .v-application.theme--dark {
        background: #000000;
    }

    /* center content on screen >= 2500px */
    .v-application .topbar-backdrop {
        display: none;
    }
    .v-application, .topbar-backdrop {
        transition: .2s cubic-bezier(.4,0,.2,1);
        transition-duration: 0.2s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-delay: 0s;
        transition-property: all;
    }
    @media screen and (min-width: 2500px) {
        :root {
            --gap: calc((100% - 2276px) / 2);
        }
        .v-application {
            padding-left: var(--gap);
            padding-right: var(--gap);
        }
        .v-navigation-drawer {
            left: var(--gap);
        }
        .v-application--wrap > header {
            margin-left: var(--gap);
            margin-right: var(--gap)
        }

        .v-application .topbar-backdrop {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            height: 80px;
            width: 100%;
        }
        .v-application.theme--light .topbar-backdrop {
            background: #4169e1;
        }
        .v-application.theme--dark .topbar-backdrop {
            background: #191919;
        }

        #dialog-loader {
            margin-left: calc(var(--gap) * -1);
            margin-right: calc(var(--gap) * -1);
        }
    }
</style>
