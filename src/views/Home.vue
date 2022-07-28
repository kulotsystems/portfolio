<template>
    <v-container>
        <div class="primary--text text--lighten-2">
            <h1>HOME PAGE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet doloremque facere fugit in, iste magnam maiores molestiae nam natus necessitatibus neque nostrum obcaecati quod recusandae tempora totam velit veniam!</p>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: 'Home',
        components: {},
        data() {
            return {}
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
