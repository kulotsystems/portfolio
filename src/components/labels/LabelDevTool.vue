<template>
    <v-icon :size="size" :icon="icon"/>
</template>

<script>
    export default {
        name: 'LabelDevTool',
        components: {},
        props: {
            size: {
                type   : String,
                default: 'small'
            },
            icon: {
                type   : String,
                default: 'mdi-vuetify'
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
