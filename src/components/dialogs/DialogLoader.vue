<template>
    <v-dialog v-model="$store.state.dialog.loader.opened" max-width="80" content-class="loader text-center" :retain-focus="false" :overlay-opacity="0.1" persistent no-click-animation>
        <v-progress-circular
            :size="70"
            :width="7"
            color="primary"
            indeterminate
        />
    </v-dialog>
</template>

<script>
    export default {
        name: 'DialogLoader',
        components: {},
        data() {
            return {}
        },
        computed: {
            dialog() {
                return this.$store.getters['dialog/loader/state'];
            }
        },
        methods: {}
    }
</script>

<style>
    .v-dialog.loader {
        overflow: hidden;
        transition: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        opacity: 0.9;
    }
</style>
