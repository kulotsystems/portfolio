<template>
    <v-container>
        <div class="primary--text text--lighten-2">
            <h1>CONTACT PAGE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi delectus dolor ex facilis maiores, molestias quas quidem. Aliquam aliquid architecto ex ipsa laborum, nisi pariatur reprehenderit temporibus velit voluptate.</p>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: 'Contact',
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods : {},
        created() {
            this.$store.commit('navigation/setActiveMainMenu', 'contact');
        },
        mounted() {
            this.$store.commit('dialog/loader/hide');
        }
    }
</script>

<style scoped>

</style>
