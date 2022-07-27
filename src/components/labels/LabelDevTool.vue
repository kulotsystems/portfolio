<template>
    <v-icon :small="small">
        <slot></slot>
    </v-icon>
</template>

<script>
    export default {
        name: 'LabelDevTool',
        components: {},
        props: {
            small: {
                type   : Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {}
    }
</script>

<style scoped>
    .v-icon {
        opacity: 0.6;
    }
</style>
