<template>
    <v-btn icon :color="color" :variant="variant" :size="buttonSize" @click="$store.commit('goto', url)">
        <v-icon :icon="icon" :size="iconSize"/>
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
            buttonSize: {
                type   : String,
                default: 'default'
            },
            iconSize: {
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
