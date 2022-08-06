<template>
    <v-btn fab :color="color" :outlined="outlined" :text="text" :large="large" :small="small" :x-small="xSmall" @click="$store.commit('goto', url)">
        <v-icon>
            <slot></slot>
        </v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: 'ButtonSocial',
        components: {},
        props: {
            outlined: {
                type   : Boolean,
                default: false
            },
            text: {
                type   : Boolean,
                default: false
            },
            color: {
                type   : String,
                default: 'primary'
            },
            large: {
                type   : Boolean,
                default: false
            },
            small: {
                type   : Boolean,
                default: false
            },
            xSmall: {
                type   : Boolean,
                default: false
            },
            url: {
                type   : String,
                default: null
            }
        },
        data() {
            return {

            }
        },
        computed: {},
        methods : {

        }
    }
</script>

<style scoped>

</style>
