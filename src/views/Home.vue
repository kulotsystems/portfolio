<template>
    <div class="dark--text text--lighten-2 pb-0">
        <h1>HOME</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quia repellendus sint suscipit voluptatum? Dolor, dolorum ducimus facere modi nemo omnis ratione sed voluptatem? Aliquam delectus ex illum pariatur sequi?</p>

        <h2>Reviews</h2>
        <carousel-reviews/>
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
