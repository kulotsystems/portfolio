<template>
    <v-container>
        <div class="dark--text text--lighten-2 pb-0">
            <v-card flat>
                <v-card-text class="mt-1 pb-0 pb-sm-5 pt-sm-7 px-0">
                    <p class="intro px-1 text-body-1 text-sm-h6 text-lg-h5 mb-1 font-weight-bold dark--text text--lighten-2">
                        Hi there, I am {{ $store.getters.profile.name.firstName }}.
                    </p>
                    <p class="text-h3 text-sm-h2 text-lg-h1 font-weight-bold primary--text">I build apps for the Web.</p>
                </v-card-text>
            </v-card>

            <div class="mb-10">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga incidunt ipsa iste magnam neque nihil obcaecati qui, vel voluptatem. Consequatur cupiditate id illum libero natus obcaecati omnis quia reiciendis vero.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam aspernatur atque, consequuntur delectus dicta distinctio expedita illo ipsum labore magnam mollitia nostrum, omnis optio quisquam quod temporibus tenetur totam!</p>
            </div>

            <v-row>
                <v-col cols="12" md="5" lg="4" xl="3" class="primary lighten-4" :class="{ 'top-border-radius': $vuetify.breakpoint.smAndDown, 'left-border-radius': $vuetify.breakpoint.mdAndUp }">
                    <div class="fill-height" style="display: flex; justify-content: center; align-items: center">
                        <div class="text-center py-4 py-md-0">
                            <v-row justify="center">
                                <v-col cols="12" sm="11">
                                    <p class="text-h3 text-sm-h2 text-lg-h1 font-weight-bold primary--text">Mentor</p>
                                    <p class="primary--text text--darken-1 mb-0" :class="{ 'text-body-1': $vuetify.breakpoint.smAndDown, 'text-h6': $vuetify.breakpoint.md || $vuetify.breakpoint.lg }">
                                        I'm always happy to share my passion to young developers.
                                        Mentoring is so fun that I also learn a lot along the way.
                                    </p>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6" lg="7" xl="8" class="pa-0">
                    <carousel-reviews/>
                </v-col>
                <v-col md="1" lg="1" xl="1" class="primary lighten-4" :class="{ 'bottom-border-radius': $vuetify.breakpoint.smAndDown, 'right-border-radius': $vuetify.breakpoint.mdAndUp }"/>
            </v-row>
        </div>
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
