<template>
    <v-card flat tile class="transparent">
        <v-card-text class="pt-9" align="center">
            <v-avatar :size="avatarSize">
                <v-img :src="profilePhoto">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="primary lighten-3"/>
                        </v-row>
                    </template>
                </v-img>
            </v-avatar>

            <div class="mt-4">
                <p class="text-h4 text-xl-h3 primary--text text--darken-1 font-weight-bold mb-0"><small>{{ $store.getters.fullName }}</small></p>
                <p class="text-body-1 text-xl-h6 primary--text text--darken-1 mb-0">{{ $store.getters.profile.position }}</p>
            </div>
        </v-card-text>
        <v-card-actions class="justify-center">
            <button-social class="mx-1" text :url="$store.getters.profile.socials.Twitter"  outlined :large="$vuetify.breakpoint.xl">$twitter</button-social>
            <button-social class="mx-1" text :url="$store.getters.profile.socials.Facebook" outlined :large="$vuetify.breakpoint.xl">$facebook</button-social>
            <button-social class="mx-1" text :url="$store.getters.profile.socials.Github"   outlined :large="$vuetify.breakpoint.xl">$github</button-social>
        </v-card-actions>
    </v-card>
</template>

<script>
    import profilePhoto from '../../assets/img/kulotsystems-v2.jpg';

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
        computed: {
            avatarSize() {
                let size = 160;
                if(this.$vuetify.breakpoint.lg)
                    size = 200;
                else if(this.$vuetify.breakpoint.xl)
                    size = 250;
                return size;
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
