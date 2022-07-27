<template>
    <v-bottom-sheet v-model="$store.state.dialog.image.opened" :retain-focus="false" :max-width="maxWidth" scrollable>
        <v-card tile elevation="24">
            <v-card-title class="pa-3">
                <p class="ma-0">
                    <v-icon class="pb-1">photo</v-icon>
                    {{ dialog.title }}
                </p>
                <v-spacer></v-spacer>
                <v-btn @click="$store.commit('dialog/image/hide')" icon large>
                    <v-icon>close</v-icon>
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
    </v-bottom-sheet>
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
                if(this.$vuetify.breakpoint.sm)
                    width = 960;
                else if(this.$vuetify.breakpoint.mdAndUp)
                    width = 1200;
                return width;
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
