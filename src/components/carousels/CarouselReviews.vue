<template>
    <v-carousel
        v-model="slide"
        :continuous="false"
        :height="height"
        :show-arrows="$vuetify.display.lgAndUp"
        hide-delimiter-background
        light
        cycle
        interval="15000"
        style="border-radius: 8px;"
    >
        <template v-slot:prev="{ on, attrs }">
            <v-btn class="primary lighten-5" :large="$vuetify.display.sm" :x-large="$vuetify.display.mdAndUp" :fab="$vuetify.display.xl" icon v-bind="attrs" v-on="on">
                <v-icon color="primary" style="opacity: 0.7">chevron_left</v-icon>
            </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
            <v-btn class="primary lighten-5" :large="$vuetify.display.sm" :x-large="$vuetify.display.mdAndUp" :fab="$vuetify.display.xl" icon v-bind="attrs" v-on="on">
                <v-icon color="primary" style="opacity: 0.7">chevron_right</v-icon>
            </v-btn>
        </template>
        <v-carousel-item v-for="(review, module) in reviews" :key="module">
            <review :review="{ module: module, ...review }"/>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    import { defineAsyncComponent } from 'vue';

    export default {
        name: 'CarouselReviews',
        components: {
            'review': defineAsyncComponent(() => import('../../components/cards/Review.vue'))
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
                if(this.$vuetify.display.xs)
                    height = 530;
                else if(this.$vuetify.display.sm)
                    height = 400;
                else if(this.$vuetify.display.md)
                    height = 640;
                else if(this.$vuetify.display.lg)
                    height = 530;
                else if(this.$vuetify.display.xl)
                    height = 530;
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
