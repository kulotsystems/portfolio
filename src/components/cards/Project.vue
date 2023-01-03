<template>
    <v-card height="100%" elevation="4">
        <v-img
            :src="project.cover"
            aspect-ratio="1.36"
            style="cursor: pointer"
            @click="$store.commit('dialog/image/show', { image: project.cover, title: project.title })"
        >
            <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary lighten-3"/>
                </v-row>
            </template>
        </v-img>
        <v-card-title>
            <div class="title">
                {{ project.title }}s
            </div>
        </v-card-title>
        <v-card-text>
            <p class="description mb-0">{{ project.desc }}</p>
        </v-card-text>
        <v-card-actions>
            <button-social v-if="project.production" :url="project.production" class="mx-0" :size="($vuetify.display.lgAndDown) ? 'x-small' : 'default'" icon="mdi-open-in-new" variant="text" size="small"/>
            <button-social v-if="project.repository" :url="project.repository" class="mx-0" :size="($vuetify.display.lgAndDown) ? 'x-small' : 'default'" icon="mdi-github" variant="text" size="small"/>
            <v-spacer/>
            <v-btn
                variant="text"
                color="primary"
                exact
                router
                :to="{ name: 'projects', params: { slug: this.project.slug } }"
                :size="($vuetify.display.xl) ? 'x-large' : 'default'"
            >
                Read More
                <v-icon end :size="($vuetify.display.xl) ? 'large' : 'default'" icon="mdi-chevron-right"/>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import { defineAsyncComponent } from 'vue';

    export default {
        name: 'Project',
        props: {
            project: {
                type   : Object,
                default: null
            }
        },
        components: {
            'button-social': defineAsyncComponent(() => import('../../components/buttons/ButtonSocial.vue')),
        },
        data() {
            return {

            }
        },
        computed: {},
        methods : {},
        mounted() {
            this.$store.commit('dialog/loader/hide');
        }
    }
</script>

<style scoped>
    .title {
        white-space: nowrap ;
        word-break: normal;
        overflow: hidden ;
        text-overflow: ellipsis;
    }
    .description {
        height: 4.5rem;
        font-size: 0.99rem;
        line-height: 1.5rem;
        max-height: 4.5rem;
        overflow: hidden;
        display: block;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        white-space: pre-wrap;
    }

    @media (min-width: 1904px) {
        .title {
            font-size: 24px !important;
        }
        .description {
            height: 5.7rem;
            font-size: 1.29rem;
            line-height: 1.9rem;
            max-height: 5.7rem;
        }
    }
</style>
