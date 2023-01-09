<template>
    <v-container class="pl-md-0 pb-5 pb-md-12">
        <v-card flat class="transparent mt-2 mt-sm-3 mt-md-4 mb-16 pb-8" :dark="$store.getters.isDarkMode">
            <v-card-text>
                <p class="font-weight-bold mb-0" :class="$store.getters['breakpoints/font/h1']">
                    Let's Transform Your Business and Inspire the Future Together
                </p>
            </v-card-text>

            <v-card-subtitle :class="$store.getters['breakpoints/font/p']">
                <v-row>
                    <v-col cols="12">
                        <p>
                            Hello World! My name is {{ $store.getters.profile.name.firstName }}
                            and I am a full-stack developer with a passion for helping small to medium-sized businesses and organizations
                            streamline their operations through the use of web technologies.
                        </p>

                        <p>
                            In addition to my work as a developer,
                            I am also an educator who is dedicated to inspiring the next generation of tech professionals.
                        </p>
                    </v-col>
                </v-row>
            </v-card-subtitle>
            <v-card-actions class="px-4">
                <v-btn :large="$vuetify.breakpoint.mdAndDown" :x-large="$vuetify.breakpoint.xl" :class="$store.getters['breakpoints/button/lg']" @click="goto({ name: 'projects' })" rounded color="primary" elevation="0">
                    <v-icon left>{{ $store.getters['navigation/mainMenuItems'][1].icon }}</v-icon>
                    <span v-if="$vuetify.breakpoint.smAndUp">See&nbsp;</span>My Projects
                </v-btn>
                <v-btn :large="$vuetify.breakpoint.mdAndDown" :x-large="$vuetify.breakpoint.xl" :class="$store.getters['breakpoints/button/lg']" @click="goto({ name: 'contact' })"  rounded color="primary" text>
                    <v-icon left>{{ $store.getters['navigation/mainMenuItems'][2].icon }}</v-icon>
                    Let's Talk
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-lazy v-model="$store.state.transitions.lazy.overview.collaborators" transition="slide-x-transition">
            <v-card flat class="transparent mb-16" :dark="$store.getters.isDarkMode">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="5" lg="4" xl="5" class="pr-md-10">
                            <p class="font-weight-bold" :class="$store.getters['breakpoints/font/h2']">
                                Collaborators
                            </p>
                            <p class="mb-0" :class="$store.getters['breakpoints/font/p']">
                                This application's codebase can be found on
                                <a href="https://github.com/kulotsystems/portfolio" target="_blank">GitHub</a>.
                                {{ $vuetify.breakpoint.smAndDown ? 'Below' : 'To the right' }},
                                you'll find reviews from my colleagues and collaborators.
                            </p>
                        </v-col>
                        <v-col cols="12" md="7" lg="8" xl="7">
                            <carousel-reviews/>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-lazy>
    </v-container>
</template>

<script>
    export default {
        name: 'Overview',
        components: {
            'carousel-reviews': () => import('../components/carousels/CarouselReviews.vue')
        },
        data() {
            return {
                lazy: {
                    collaborators: false
                }
            }
        },
        computed: {},
        methods : {
            goto(route) {
                this.$store.commit('dialog/loader/show');
                this.$router.push(route);
            }
        },
        created() {
            this.$store.commit('navigation/setActiveMainMenu', 'overview');
        },
        mounted() {
            this.$store.commit('dialog/loader/hide');
        }
    }
</script>

<style scoped>
    .top-border-radius {
        border-top-left-radius: 24px;
        border-top-right-radius: 24px;
    }
    .right-border-radius {
        border-top-right-radius: 24px;
        border-bottom-right-radius: 24px;
    }
    .bottom-border-radius {
        border-bottom-left-radius: 24px;
        border-bottom-right-radius: 24px;
    }
    .left-border-radius {
        border-top-left-radius: 24px;
        border-bottom-left-radius: 24px;
    }
</style>
