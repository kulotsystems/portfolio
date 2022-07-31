<template>
    <div class="dark--text text--lighten-2 pb-0">
        <h1>HOME</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quia repellendus sint suscipit voluptatum? Dolor, dolorum ducimus facere modi nemo omnis ratione sed voluptatem? Aliquam delectus ex illum pariatur sequi?</p>

        <h2>Reviews</h2>
        <v-carousel
            v-model="review.slide"
            :continuous="false"
            :height="reviewHeight"
            :show-arrows="$vuetify.breakpoint.smAndUp"
            style="border-radius: 4px"
            hide-delimiter-background
        >
            <template v-slot:prev="{ on, attrs }">
                <v-btn class="primary lighten-5" :large="$vuetify.breakpoint.sm" :x-large="$vuetify.breakpoint.mdAndUp" icon v-bind="attrs" v-on="on">
                    <v-icon color="primary">chevron_left</v-icon>
                </v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
                <v-btn class="primary lighten-5" :large="$vuetify.breakpoint.sm" :x-large="$vuetify.breakpoint.mdAndUp" icon v-bind="attrs" v-on="on">
                    <v-icon color="primary">chevron_right</v-icon>
                </v-btn>
            </template>
            <v-carousel-item v-for="(review, module) in reviews" :key="module">
                <review :review="{ module: module, ...review }"/>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            'review': () => import('../components/cards/Review.vue')
        },
        data() {
            return {
                review: {
                    slide : 0
                }
            }
        },
        computed: {
            reviews() {
                return this.$store._modules.root.state.reviews;
            },
            reviewHeight() {
                let height = 0;
                if(this.$vuetify.breakpoint.xs)
                    height = 630;
                else if(this.$vuetify.breakpoint.sm)
                    height = 570;
                else if(this.$vuetify.breakpoint.md)
                    height = 660;
                else if(this.$vuetify.breakpoint.lg)
                    height = 560;
                return height;
            }
        },
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

</style>
