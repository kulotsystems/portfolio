<template>
    <v-dialog v-model="$store.state.dialog.loader.opened" fullscreen  content-class="loader text-center" :retain-focus="false" :overlay-opacity="0" persistent no-click-animation>
        <v-skeleton-loader type="image" tile width="100%" height="100%"/>
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
        opacity: 0.8;
    }

    .v-skeleton-loader {
        cursor: unset;
    }
    .v-skeleton-loader__image {
        width: 100%;
        height: 100%;
    }
</style>
