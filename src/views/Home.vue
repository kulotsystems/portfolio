<template>
    <v-container>
        <v-row class="mb-4">
            <v-col class="dark--text text--lighten-2 pb-0">
                <v-card flat>
                    <v-card-text align="center" class="mt-1 pb-0 pb-sm-5 pt-sm-7 px-0">
                        <div align="left" style="display: inline-block">
                            <p class="intro px-1 text-body-1 text-sm-h6 text-lg-h5 mb-1 font-weight-bold info--text text--lighten-3">
                                Hi there, I am {{ $store.getters.profile.name.firstName }}.
                            </p>
                            <p class="text-h3 text-sm-h2 text-lg-h1 font-weight-bold info--text text--lighten-3">I build apps for the Web.</p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="mb-4">
            <v-col>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio explicabo harum inventore ipsa nobis officiis quisquam! Animi cupiditate, dicta dolore id laudantium minima odit quas quod reiciendis soluta, totam voluptatum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio explicabo harum inventore ipsa nobis officiis quisquam! Animi cupiditate, dicta dolore id laudantium minima odit quas quod reiciendis soluta, totam voluptatum.</p>
            </v-col>
        </v-row>

        <v-row class="px-2 mb-4">
            <v-col cols="12" md="5" lg="4" xl="3" class="primary lighten-4" :class="{ 'top-border-radius': $vuetify.breakpoint.smAndDown, 'left-border-radius': $vuetify.breakpoint.mdAndUp }">
                <div class="fill-height" style="display: flex; justify-content: center; align-items: center">
                    <v-row justify="center" class="text-center py-4 py-md-0">
                        <v-col cols="12" sm="11">
                            <p class="text-h3 text-sm-h2 text-lg-h1 font-weight-bold primary--text">Mentor</p>
                            <p class="primary--text text--darken-1 mb-0" :class="{ 'text-body-1': $vuetify.breakpoint.smAndDown, 'text-h6': $vuetify.breakpoint.md || $vuetify.breakpoint.lg }">
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
            <v-col md="1" lg="1" xl="1" class="primary lighten-4" :class="{ 'bottom-border-radius': $vuetify.breakpoint.smAndDown, 'right-border-radius': $vuetify.breakpoint.mdAndUp }"/>
        </v-row>

        <v-row>
            <v-col>
                <br/><br/><br/>
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
    .intro {
        letter-spacing: 1px !important;
    }
    .top-border-radius {
        border-top-left-radius: 32px;
        border-top-right-radius: 32px;
    }
    .right-border-radius {
        border-top-right-radius: 32px;
        border-bottom-right-radius: 32px;
    }
    .bottom-border-radius {
        border-bottom-left-radius: 32px;
        border-bottom-right-radius: 32px;
    }
    .left-border-radius {
        border-top-left-radius: 32px;
        border-bottom-left-radius: 32px;
    }

</style>
