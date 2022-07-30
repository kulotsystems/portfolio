<template>
    <div class="dark--text text--lighten-2 pa-3 pb-0">
        <h1>HOME</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quia repellendus sint suscipit voluptatum? Dolor, dolorum ducimus facere modi nemo omnis ratione sed voluptatem? Aliquam delectus ex illum pariatur sequi?</p>

        <v-row class="justify-center">
            <v-col cols="12">
                <h2>Reviews</h2>
            </v-col>

            <v-col v-for="(review, module) in reviews" :key="module" cols="12" md="6">
                <review :review="{ module: module, ...review }"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {
            'review': () => import('../components/cards/Review.vue')
        },
        data() {
            return {}
        },
        computed: {
            reviews() {
                return this.$store._modules.root.state.reviews;
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
