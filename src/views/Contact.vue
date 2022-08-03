<template>
    <v-container>
        <v-card flat class="transparent mt-2 mt-sm-3 mt-md-4 mb-16 pb-16">
            <v-card-text>
                <p class="text-h4 text-md-h3 text-xl-h2 font-weight-bold mb-0">
                    Contact Me
                </p>
            </v-card-text>

            <v-card-subtitle :class="$store.getters['breakpoints/font/p']">
                <p>
                    This page is still under development.
                </p>
                <p>
                    A contact form should be available here soon
                    together with a bunch of info on how to reach me.
                </p>
                <p>
                    Got any ideas? You can always submit a pull request to this project's repository on <a href="https://github.com/kulotsystems/portfolio" target="_blank">GitHub</a>.
                </p>
            </v-card-subtitle>
        </v-card>
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
