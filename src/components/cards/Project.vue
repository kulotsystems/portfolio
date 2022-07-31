<template>
    <v-card height="100%" class="grey lighten-5" hover>
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
                {{ project.title }}
            </div>
        </v-card-title>
        <v-card-text>
            <p class="description mb-0">{{ project.desc }}</p>
        </v-card-text>
        <v-card-actions>
            <button-social v-if="project.production != null" :url="project.production" class="mx-1" x-small text>open_in_new</button-social>
            <button-social v-if="project.repository"         :url="project.repository" class="mx-1" x-small text>$github</button-social>
            <v-spacer/>
            <v-btn
                text
                color="primary"
                exact
                router
                :to="{ name: 'projects', params: { slug: this.project.slug } }"
            >
                Read More
                <v-icon right>chevron_right</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'Project',
        props: {
            project: {
                type   : Object,
                default: null
            }
        },
        components: {
            'button-social': () => import('../../components/buttons/ButtonSocial.vue'),
        },
        data() {
            return {

            }
        },
        computed: {},
        methods: {}
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
</style>
