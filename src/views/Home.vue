<template>
    <v-container>
        <v-card flat class="transparent">
            <v-card-text>
                <p class="text-h3 text-md-h2 font-weight-bold mb-0">
                    Let's bring your idea on the Web.
                </p>
            </v-card-text>

            <v-card-subtitle>
                <p class="mb-0 text-body-1 text-md-h6">
                    Hi there! I am Arvic, a fullstack developer helping small to medium-sized businesses
                    and organizations automate their workflows on the Web.
                    I am also an educator inspiring young people to learn tech.
                </p>
            </v-card-subtitle>
            <v-card-actions class="px-4 pt-4">
                <v-btn x-large color="primary" exact router :to="{ name: 'projects' }">
                    <v-icon left>{{ $store.getters['navigation/mainMenuItems'][1].icon }}</v-icon>
                    My Projects
                </v-btn>
                <v-btn x-large text exact router :to="{ name: 'contact' }">
                    <v-icon left>{{ $store.getters['navigation/mainMenuItems'][2].icon }}</v-icon>
                    Let's Talk
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-row class="mb-16">
            <v-col>

            </v-col>
        </v-row>


        <v-row class="px-2">
            <v-col cols="12" md="5" lg="4" xl="3" class="grey lighten-2" :class="{ 'top-border-radius': $vuetify.breakpoint.smAndDown, 'left-border-radius': $vuetify.breakpoint.mdAndUp }">
                <div class="fill-height" style="display: flex; justify-content: center; align-items: center">
                    <v-row justify="center" class="text-center py-4 py-md-0">
                        <v-col cols="12" sm="11">
                            <p class="text-h3 text-lg-h2 font-weight-bold dark--text text--lighten-1">Mentor</p>
                            <p class="dark--text mb-0 text--lighten-1" :class="{ 'text-body-1': $vuetify.breakpoint.smAndDown, 'text-h6': $vuetify.breakpoint.md || $vuetify.breakpoint.lg }">
                                I'm always happy to share my passion to young developers.
                                Mentoring is so fun that I also learn a lot along the way.
                            </p>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="12" md="6" lg="7" xl="8" class="pa-0">
                <carousel-reviews/>
            </v-col>
            <v-col md="1" lg="1" xl="1" class="grey lighten-2" :class="{ 'bottom-border-radius': $vuetify.breakpoint.smAndDown, 'right-border-radius': $vuetify.breakpoint.mdAndUp }"/>
        </v-row>

        <v-row>
            <v-col>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </v-col>
        </v-row>
    </v-container>
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
        methods : {},
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
