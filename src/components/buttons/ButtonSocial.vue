<template>
    <v-btn icon :color="color" :variant="variant" :size="size" @click="$store.commit('goto', url)">
        <v-icon :icon="icon"/>
    </v-btn>
</template>

<script>
    export default {
        name: 'ButtonSocial',
        components: {},
        props: {
            icon: {
                type   : String,
                default: 'mdi-vuetify'
            },
            variant: {
                type   : String,
                default: 'text'
            },
            color: {
                type   : String,
                default: 'primary'
            },
            size: {
                type   : String,
                default: 'default'
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
