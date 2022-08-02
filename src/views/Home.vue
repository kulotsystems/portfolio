<template>
    <div>
        <v-container>
            <v-card flat class="transparent mt-4 mb-16 pb-16">
                <v-card-text>
                    <p class="text-h3 text-md-h2 font-weight-bold mb-0">
                        Let's build your business on the Web.
                    </p>
                </v-card-text>

                <v-card-subtitle>
                    <p class="text-body-1 text-md-h6">
                        Hi there! I am {{ $store.getters.profile.name.firstName }},
                        a full-stack developer helping small to medium-sized businesses and organizations
                        to automate their business logic using web technologies.
                    </p>
                    <p class="text-body-1 text-md-h6">
                        I am also an educator inspiring young people to learn tech.
                    </p>
                </v-card-subtitle>
                <v-card-actions class="px-4">
                    <v-btn :large="$vuetify.breakpoint.mdAndDown" :x-large="$vuetify.breakpoint.lgAndUp" @click="goto({ name: 'projects' })" color="primary" elevation="0">
                        <v-icon left>{{ $store.getters['navigation/mainMenuItems'][1].icon }}</v-icon>
                        See My Projects
                    </v-btn>
                    <v-btn :large="$vuetify.breakpoint.mdAndDown" :x-large="$vuetify.breakpoint.lgAndUp" @click="goto({ name: 'contact' })" text>
                        <v-icon left>{{ $store.getters['navigation/mainMenuItems'][2].icon }}</v-icon>
                        Let's Talk
                    </v-btn>
                </v-card-actions>
            </v-card>

            <v-card flat class="transparent mb-16 pb-16">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="5" lg="4">
                            <p class="text-h5 text-md-h4 font-weight-bold">
                                Collaborators
                            </p>
                            <p class="text-body-2 text-md-body-1">
                                The entire codebase for this application is available on
                                <a href="https://github.com/kulotsystems/portfolio" target="_blank">GitHub</a>.
                                {{ $vuetify.breakpoint.smAndDown ? 'Below' : 'On the right' }}
                                are some reviews from my collaborators.
                            </p>
                        </v-col>
                        <v-col cols="12" md="7" lg="8">
                            <carousel-reviews/>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            'carousel-reviews': () => import('../components/carousels/CarouselReviews.vue')
        },
        data() {
            return {

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
            this.$store.commit('navigation/setActiveMainMenu', 'home');
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
