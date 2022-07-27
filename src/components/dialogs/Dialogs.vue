<template>
    <div>
        <dialog-loader/>
        <dialog-image/>
    </div>
</template>

<script>
    export default {
        name: 'Dialogs',
        components: {
            'dialog-loader': () => import('./DialogLoader.vue'),
            'dialog-image' : () => import('./DialogImage.vue')
        },
        props: {
            comingSoon: {
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

<style>
    .v-bottom-sheet > .v-card {
        border-radius: 12px 12px 0 0 !important;
    }
</style>
