<template>
    <v-card flat tile class="transparent">
        <v-card-text class="pt-9" align="center">
            <v-avatar :size="avatarSize">
                <v-img :src="profilePhoto" @load="$store.commit('navigation/loadSidebar')">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="primary lighten-3"/>
                        </v-row>
                    </template>
                </v-img>
            </v-avatar>

            <div class="mt-4">
                <p
                    class="text-h4 text-xl-h3 primary--text font-weight-bold mb-0"
                    :class="{ 'text--darken-1': !$vuetify.theme.dark, 'text--lighten-2': $vuetify.theme.dark }"
                >
                    <small>{{ $store.getters.fullName }}</small>
                </p>
                <p
                     class="text-body-1 text-xl-h6 primary--text mb-0"
                     :class="{ 'text--darken-1': !$vuetify.theme.dark, 'text--lighten-2': $vuetify.theme.dark }"
                >
                    {{ $store.getters.profile.position }}
                </p>
            </div>
        </v-card-text>
        <v-card-actions class="justify-center">
            <button-social icon="mdi-twitter"  class="mx-1" text :url="$store.getters.profile.socials.Twitter"  outlined :large="$vuetify.display.xl"/>
            <button-social icon="mdi-facebook" class="mx-1" text :url="$store.getters.profile.socials.Facebook" outlined :large="$vuetify.display.xl"/>
            <button-social icon="mdi-github"   class="mx-1" text :url="$store.getters.profile.socials.Github"   outlined :large="$vuetify.display.xl"/>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import profilePhoto from '../../assets/img/kulotsystems-v2.jpg';

    export default {
        name: 'Profile',
        components: {
            'button-social': defineAsyncComponent(() => import('../../components/buttons/ButtonSocial.vue'))
        },
        data() {
            return {
                profilePhoto: profilePhoto
            }
        },
        computed: {
            avatarSize() {
                let size = 160;
                if(this.$vuetify.display.lg)
                    size = 200;
                else if(this.$vuetify.display.xl)
                    size = 250;
                return size;
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
