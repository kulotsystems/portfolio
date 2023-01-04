<template>
    <v-dialog transition="dialog-bottom-transition" v-model="$store.state.dialog.image.opened" :retain-focus="false" :max-width="maxWidth" scrollable>
        <v-card tile elevation="24">
            <v-card-title class="pa-3 d-flex">
                <p class="ma-0">
                    <v-icon class="pb-1" icon="mdi-image" size="small"/>
                    {{ dialog.title }}
                </p>
                <v-spacer></v-spacer>
                <v-btn @click="$store.commit('dialog/image/hide')" icon size="large" variant="text">
                    <v-icon icon="mdi-close"/>
                </v-btn>
            </v-card-title>

            <!-- IMAGE -->
            <v-card-text class="pa-2 pt-0">
                <v-img :src="dialog.image" style="border-radius: 4px;">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="primary lighten-3"/>
                        </v-row>
                    </template>
                </v-img>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'DialogImage',
        components: {},
        data() {
            return {}
        },
        computed: {
            dialog() {
                return this.$store.getters['dialog/image/state'];
            },
            maxWidth() {
                let width = 600;
                if(this.$vuetify.display.sm)
                    width = 960;
                else if(this.$vuetify.display.mdAndUp)
                    width = 1200;
                return width;
            }
        },
        methods: {

        }
    }
</script>

<style>
    .v-bottom-sheet > .v-card {
        border-radius: 10px 10px 0 0 !important;
    }
</style>
