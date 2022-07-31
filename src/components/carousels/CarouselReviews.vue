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
                    height = 640;
                else if(this.$vuetify.breakpoint.sm)
                    height = 580;
                else if(this.$vuetify.breakpoint.md)
                    height = 670;
                else if(this.$vuetify.breakpoint.lg)
                    height = 570;
                return height;
            }
        },
        methods: {}
    }
</script>

<style>
    .v-carousel .theme--light.v-btn.v-btn--icon {
        color: #6482fe;
    }

    .v-carousel__controls {
        padding-bottom: 15px;
        text-align: center;
    }

    .v-carousel__controls__item {
        margin-left: 1px;
        margin-right: 1px;
    }

    .v-carousel__controls__item:first-child {
        margin-left: 0;
    }

    .v-carousel__controls__item:last-child {
        margin-right: 0;
    }
</style>
