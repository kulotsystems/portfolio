<template>
    <v-carousel
        v-model="slide"
        :continuous="false"
        :height="height"
        :show-arrows="$vuetify.breakpoint.smAndUp"
        hide-delimiter-background
        light
        style="border-radius: 4px;"
    >
        <template v-slot:prev="{ on, attrs }">
            <v-btn class="primary lighten-4" :large="$vuetify.breakpoint.sm" :x-large="$vuetify.breakpoint.mdAndUp" icon v-bind="attrs" v-on="on">
                <v-icon color="primary">chevron_left</v-icon>
            </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
            <v-btn class="primary lighten-4" :large="$vuetify.breakpoint.sm" :x-large="$vuetify.breakpoint.mdAndUp" icon v-bind="attrs" v-on="on">
                <v-icon color="primary">chevron_right</v-icon>
            </v-btn>
        </template>
        <v-carousel-item v-for="(review, module) in reviews" :key="module">
            <review :review="{ module: module, ...review }"/>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name: 'CarouselReviews',
        components: {
            'review': () => import('../../components/cards/Review.vue')
        },
        data() {
            return {
                slide : 0
            }
        },
        computed: {
            reviews() {
                return this.$store._modules.root.state.reviews;
            },
            height() {
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
        methods: {}
    }
</script>

<style>
    .v-carousel .theme--light.v-btn.v-btn--icon {
        color: #6482fe !important;
    }
</style>
