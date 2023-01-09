<template>
    <v-carousel
        v-model="slide"
        :continuous="false"
        :height="height"
        :show-arrows="$vuetify.breakpoint.lgAndUp"
        hide-delimiter-background
        light
        cycle
        interval="15000"
        style="border-radius: 8px;"
        :dark="$store.getters.isDarkMode"
    >
        <template v-slot:prev="{ on, attrs }">
            <v-btn :class="{ 'primary lighten-5': $store.getters.isLightMode, 'dark darken-2': $store.getters.isDarkMode }" :large="$vuetify.breakpoint.sm" :x-large="$vuetify.breakpoint.mdAndUp" :fab="$vuetify.breakpoint.xl" icon v-bind="attrs" v-on="on">
                <v-icon :color="$store.getters.isLightMode ? 'primary' : 'grey'" style="opacity: 0.7">chevron_left</v-icon>
            </v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
            <v-btn :class="{ 'primary lighten-5': $store.getters.isLightMode, 'dark darken-2': $store.getters.isDarkMode }" :large="$vuetify.breakpoint.sm" :x-large="$vuetify.breakpoint.mdAndUp" :fab="$vuetify.breakpoint.xl" icon v-bind="attrs" v-on="on">
                <v-icon :color="$store.getters.isLightMode ? 'primary' : 'grey'" style="opacity: 0.7">chevron_right</v-icon>
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
                    height = 430;
                else if(this.$vuetify.breakpoint.sm)
                    height = 340;
                else if(this.$vuetify.breakpoint.md)
                    height = 520;
                else if(this.$vuetify.breakpoint.lg)
                    height = 460;
                else if(this.$vuetify.breakpoint.xl)
                    height = 460;
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
