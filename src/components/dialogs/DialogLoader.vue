<template>
    <v-skeleton-loader
        v-if="$store.state.dialog.loader.opened"
        id="dialog-loader"
        type="image"
        tile
        width="100%"
        height="100%"
    />
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
    #dialog-loader {
        cursor: unset;
        position: fixed;
        z-index: 2147483647;
        opacity: 0.7;
    }
    #dialog-loader .v-skeleton-loader__image {
        width: 100%;
        height: 100%;
    }
</style>
