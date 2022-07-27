<template>
    <v-card flat tile class="transparent">
        <v-card-text align="center">
            <v-avatar size="160">
                <v-img :src="profilePhoto">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="primary lighten-3"/>
                        </v-row>
                    </template>
                </v-img>
            </v-avatar>

            <div class="mt-4">
                <p class="text-h4 info--text text--darken-1 font-weight-bold mb-0"><small>{{ $store.getters.profile.name }}</small></p>
                <p class="text-body-1 info--text text--darken-1 mb-0">{{ $store.getters.profile.title }}</p>
            </div>
        </v-card-text>
        <v-card-actions class="justify-center">
            <button-social class="mx-1" text :url="$store.getters.profile.socials.Twitter"  outlined>$twitter</button-social>
            <button-social class="mx-1" text :url="$store.getters.profile.socials.Facebook" outlined>$facebook</button-social>
            <button-social class="mx-1" text :url="$store.getters.profile.socials.Github"   outlined>$github</button-social>
        </v-card-actions>
    </v-card>
</template>

<script>
    import profilePhoto from '../../assets/img/kulotsystems-v1.jpg';

    export default {
        name: 'Profile',
        components: {
            'button-social': () => import('../../components/buttons/ButtonSocial.vue')
        },
        data() {
            return {
                profilePhoto: profilePhoto
            }
        },
        computed: {},
        methods: {}
    }
</script>

<style scoped>

</style>
