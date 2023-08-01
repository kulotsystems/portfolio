<template>
    <v-btn
        class="pl-3 pr-4"
        rounded
        x-large
        height="64"
        color="dark"
        outlined
        :block="block"
        style="text-transform: unset; justify-content: left"
        @click="openLink"
    >
        <v-avatar class=" mr-3">
            <v-img :src="organization.avatar" />
        </v-avatar>

        {{ organization.name }}
    </v-btn>

</template>

<script>
    export default {
        name: 'ButtonOrg',
        props: {
            organization: {
                type   : Object,
                default: null,
                required: true
            },
            block: {
                type   : Boolean,
                default: false
            },
        },
        components: {

        },
        data() {
            return {

            }
        },
        computed: {},
        methods : {
            openLink() {
                window.open(this.organization.link, '_blank');
            }
        }
    }
</script>

<style scoped>

</style>
