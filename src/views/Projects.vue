<template>
    <v-container class="pl-md-0 pb-5 pb-md-12">
        <!-- all projects -->
        <v-card v-if="!project" flat class="transparent mt-2 mt-sm-3 mt-md-4">
            <v-card-text>
                <p class="text-h4 text-md-h3 text-xl-h2 font-weight-bold mb-0">
                    Featured Projects
                </p>
            </v-card-text>

            <v-card-subtitle>
                <p class="mb-10" :class="$store.getters['breakpoints/font/p']">
                    Most of my projects are systems that
                    follow certain requirements that solve a specific problem for a wide range of users.
                    But above anything else, I love building projects that are also useful and fun for me to use.
                </p>
                <v-row>
                    <v-lazy v-model="project.transition" transition="slide-x-transition" v-for="(project, slug, index) in projects" :key="slug" class="col-sm-6 col-md-4 col-lg-3 col-12">
                        <project :project="{ slug: slug, ...project }"/>
                    </v-lazy>
                </v-row>
            </v-card-subtitle>
        </v-card>

        <!-- individual project -->
        <v-row v-else class="mt-sm-1 mt-md-2 mt-lg-3">
            <!-- project cover -->
            <v-col cols="12" md="7" :class="{ 'px-7': $vuetify.breakpoint.mdAndUp }">
                <v-card :elevation="$vuetify.breakpoint.smAndDown ? 0 : 4" :class="{ 'transparent': $vuetify.breakpoint.smAndDown }">
                    <v-app-bar flat class="transparent">
                        <v-btn icon class="mr-1" @click="$router.back()" :x-large="$vuetify.breakpoint.xl">
                            <v-icon>arrow_back</v-icon>
                        </v-btn>
                        <v-toolbar-title class="pl-0" :class="$store.getters['breakpoints/font/p'] + ($vuetify.breakpoint.smAndDown ? ' font-weight-bold dark--text text--lighten-1' : '')">
                            Project: {{ project.title }}
                        </v-toolbar-title>
                        <v-spacer/>
                        <v-btn icon @click="$store.commit('dialog/image/show', { image: project.cover, title: project.title })">
                            <v-icon :small="$vuetify.breakpoint.lgAndDown">open_in_full</v-icon>
                        </v-btn>
                    </v-app-bar>
                    <v-card-text class="pt-0">
                        <v-img
                            :src="project.cover"
                            :class="{ 'thumbnail': $vuetify.breakpoint.smAndDown }"
                            height="100%"
                        >
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="primary lighten-3"/>
                                </v-row>
                            </template>
                        </v-img>
                    </v-card-text>
                    <v-card-actions class="pt-0 pt-md-2">
                        <label-dev-tool v-for="tech in project.techStack" :key="tech" :small="tech !== 'php'" class="mx-2">
                            ${{ tech }}
                        </label-dev-tool>
                    </v-card-actions>
                </v-card>
            </v-col>

            <!-- project intro -->
            <v-col cols="12" md="5" class="mb-5" :class="($vuetify.breakpoint.smAndDown ? 'px-7 ' : '') + $store.getters['breakpoints/font/p']">
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

                <div class="mt-7">
                    <v-btn color="primary" v-if="project.repository" large outlined @click="$store.commit('goto', project.repository)">
                        <v-icon small left>$github</v-icon>
                        Repo<template v-if="!$vuetify.breakpoint.md || $vuetify.breakpoint.md && !project.production">sitory</template>
                    </v-btn>
                    <v-btn color="primary" v-if="project.production" large outlined @click="$store.commit('goto', project.production)" :class="{ 'ml-3': project.repository }">
                        <v-icon small left>open_in_new</v-icon>
                        See Live
                    </v-btn>
                </div>
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
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>
