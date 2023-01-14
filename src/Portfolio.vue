<template>
    <v-app :class="{ 'mdi-loading': mdiLoading }">
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
</style>
