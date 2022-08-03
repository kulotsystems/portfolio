<template>
    <v-container>
        <!-- all projects -->
        <v-row v-if="!project">
            <v-col cols="12">
                <div class="dark--text text--lighten-2 pb-0">
                    <h1>PROJECTS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet doloremque facere fugit in, iste magnam maiores molestiae nam natus necessitatibus neque nostrum obcaecati quod recusandae tempora totam velit veniam!</p>
                </div>
            </v-col>
            <v-col v-for="(project, slug, index) in projects" :key="slug" cols="12" sm="6" md="4" lg="3">
                <project :project="{ slug: slug, ...project }"/>
            </v-col>
        </v-row>

        <!-- individual project -->
        <v-row v-else class="pt-sm-1 pt-md-2 pt-lg-3">
            <!-- project cover -->
            <v-col cols="12" sm="6" md="7">
                <v-card elevation="4">
                    <v-app-bar flat color="white">
                        <v-btn icon class="mr-1" @click="$router.back()">
                            <v-icon>arrow_back</v-icon>
                        </v-btn>
                        <v-toolbar-title class="text-h6 pl-0">
                            Project: {{ project.title }}
                        </v-toolbar-title>
                        <v-spacer/>
                        <v-btn icon @click="$store.commit('dialog/image/show', { image: project.cover })">
                            <v-icon small>open_in_full</v-icon>
                        </v-btn>
                    </v-app-bar>
                    <v-card-text class="pt-0">
                        <v-img
                            :src="project.cover"
                            height="100%"
                        >
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="primary lighten-3"/>
                                </v-row>
                            </template>
                        </v-img>
                    </v-card-text>
                    <v-card-actions>
                        <label-dev-tool v-for="tech in project.techStack" :key="tech" :small="tech !== 'php'" class="mx-2">
                            ${{ tech }}
                        </label-dev-tool>
                        <v-spacer/>
                        <button-social v-if="project.repository"         :url="project.repository" class="mx-1" small text>$github</button-social>
                        <button-social v-if="project.production != null" :url="project.production" class="mx-1" small text>open_in_new</button-social>
                    </v-card-actions>
                </v-card>
            </v-col>

            <!-- project intro -->
            <v-col cols="12" sm="6" md="5" class="text-body-1 text-md-h6 mb-5">
                <p>
                    <b>{{ project.title }}</b> is
                    <template v-if="project.desc.substr(0, 2).toLowerCase() === 'an'">
                        an {{ project.desc.substr(3) }}
                    </template>
                    <template v-else>
                        a {{ project.desc.substr(2) }}
                    </template>
                </p>
                <p>
                    This project was built using
                    <template v-for="(tech, index) in project.techStack">
                        <a :href="$store.getters['technologies/stacks'][tech].url" target="_blank" class="primary--text">{{ $store.getters['technologies/stacks'][tech].text }}</a><template v-if="project.techStack.length > 2 && index < (project.techStack.length - 1)">, </template><template v-if="index === (project.techStack.length - 2)"> and </template>
                    </template>.
                    I started it on {{ formatDate(project.timeFrame.start) }}
                    <template v-if="project.timeFrame.end">
                        then completed it on {{ formatDate(project.timeFrame.end) }}.
                    </template>
                    <template v-else>
                        and still open for changes and maintenance at present.
                    </template>
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import format from 'date-fns/format';

    export default {
        name: 'Projects',
        components: {
            'button-social' : () => import('../components/buttons/ButtonSocial.vue'),
            'label-dev-tool': () => import('../components/labels/LabelDevTool.vue'),
            'project'       : () => import('../components/cards/Project.vue'),
            'project-classy'             : () => import('../components/articles/ProjectSanayon.vue'),
            'project-schedule'           : () => import('../components/articles/ProjectSchedule.vue'),
            'project-dtr-lgu-nabua'      : () => import('../components/articles/ProjectDtrLguNabua.vue'),
            'project-lending-system'     : () => import('../components/articles/ProjectAppexGBLendingSystem.vue'),
            'project-pageant-tabulations': () => import('../components/articles/ProjectPageantTabulations.vue'),
            'project-sanayon'            : () => import('../components/articles/ProjectSanayon.vue'),
        },
        data() {
            return {}
        },
        computed: {
            projects() {
                return this.$store.getters['projects/all'];
            },
            project() {
                if(this.$route.params.slug != null)
                    return this.projects[this.$route.params.slug];
                else
                    return null;
            }
        },
        methods : {
            formatDate(d) {
                return format(new Date(d), 'MMMM yyyy');
            }
        },
        created() {
            this.$store.commit('navigation/setActiveMainMenu', 'projects');
            if(this.$route.params.slug && !this.project)
                this.$router.replace({ name: 'projects' });
        },
        mounted() {
            this.$store.commit('dialog/loader/hide');
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>
