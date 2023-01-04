<template>
    <v-container class="pl-md-0 pb-5 pb-md-12">
        <v-card flat class="transparent mt-2 mt-sm-3 mt-md-4 mb-16 pb-8">
            <v-card-text>
                <p class="font-weight-bold mb-8" :class="$store.getters['breakpoints/font/h1']">
                    Let's tech things up!
                </p>
                <div :class="$store.getters['breakpoints/font/p']">
                    <v-row>
                        <v-col cols="12">
                            <p class="mb-4">
                                Hi there, my name is <b>Arvic</b>.
                                I'm a full-stack web developer
                                committed to helping organizations and businesses
                                streamline their operations through the use of web technologies.
                                I also live my passion for education,
                                adapting to the latest tech trends
                                and inspiring the next generation of tech professionals.
                            </p>
                        </v-col>
                    </v-row>
                </div>
            </v-card-text>
            <div class="px-4">
                <v-btn :size="($vuetify.display.lgAndDown) ? 'large' : 'x-large'" @click="goto({ name: 'projects' })" rounded color="primary" variant="flat" class="mr-2">
                    <v-icon start :icon="$store.getters['navigation/mainMenuItems'][1].icon"/>
                    <span v-if="$vuetify.display.smAndUp">See&nbsp;</span>My Projects
                </v-btn>
                <v-btn :size="($vuetify.display.lgAndDown) ? 'large' : 'x-large'" @click="goto({ name: 'contact' })"  rounded color="primary" variant="text">
                    <v-icon start :icon="$store.getters['navigation/mainMenuItems'][2].icon"/>
                    Let's Talk
                </v-btn>
            </div>
        </v-card>

        <v-lazy v-model="$store.state.transitions.lazy.overview.collaborators" transition="slide-x-transition">
            <v-card flat class="transparent mb-16">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="5" lg="4" xl="5" class="pr-md-10">
                            <p class="font-weight-bold mb-5" :class="$store.getters['breakpoints/font/h2']">
                                Collaborators
                            </p>
                            <p class="mb-0" :class="$store.getters['breakpoints/font/p']">
                                This application's codebase can be found on
                                <a href="https://github.com/kulotsystems/portfolio" target="_blank">GitHub</a>.
                                {{ $vuetify.display.smAndDown ? 'Below' : 'To the right' }},
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
    import { defineAsyncComponent } from 'vue';

    export default {
        name: 'Overview',
        components: {
            'carousel-reviews': defineAsyncComponent(() => import('../components/carousels/CarouselReviews.vue'))
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
