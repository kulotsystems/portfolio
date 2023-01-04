<template>
    <v-container class="pl-md-0 pb-5 pb-md-12">
        <!-- featured projects -->
        <v-card v-if="!project" flat class="transparent mt-2 mt-sm-3 mt-md-4">
            <v-card-text>
                <p class="text-h4 text-md-h3 text-xl-h2 font-weight-bold mb-8">
                    Featured Projects
                </p>
                <p class="mb-10" :class="$store.getters['breakpoints/font/p']">
                    I enjoy creating projects that are both useful and fun to use.
                    In this page, you'll find a mix of functional systems and personal projects
                    that demonstrate my ability to develop solutions for a variety of users.
                </p>
                <v-row>
                    <v-col cols="12" sm="6" md="4" lg="3" v-model="project.transition" v-for="(project, slug, index) in projects" :key="slug">
                        <project :project="{ slug: slug, ...project }"/>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <!-- open source -->
        <v-card v-if="!project" flat class="transparent mt-8 mt-sm-9 mt-md-10">
            <v-card-text>
                <p class="text-h4 text-md-h3 text-xl-h2 font-weight-bold mb-8">
                    Open-Source Projects
                </p>

                <p class="mb-7" :class="$store.getters['breakpoints/font/p']">
                    In addition to working on personal and client projects,
                    I am passionately committed to contributing to and maintaining
                    various open-source projects in the following organizations:
                </p>

                <button-org
                    v-for="(organization, slug, index) in organizations"
                    :key="slug"
                    :organization="organization"
                    :block="$vuetify.display.xs"
                    class="mr-0 mr-sm-3 mt-3"
                />
            </v-card-text>
        </v-card>

        <!-- individual project -->
        <v-row v-else class="mt-sm-1 mt-md-2 mt-lg-3">
            <!-- project cover -->
            <v-col cols="12" md="7" :class="{ 'px-7': $vuetify.display.mdAndUp }">
                <v-card :elevation="$vuetify.display.smAndDown ? 0 : 4" :class="{ 'transparent': $vuetify.display.smAndDown }">
                    <v-app-bar flat class="transparent">
                        <v-btn icon class="mr-1" @click="$router.back()" :size="($vuetify.display.xl) ? 'x-large' : 'default'">
                            <v-icon icon="mdi-arrow-left"/>
                        </v-btn>
                        <v-toolbar-title class="pl-0" :class="$store.getters['breakpoints/font/p'] + ($vuetify.display.smAndDown ? ' font-weight-bold text-dark text--lighten-1' : '')">
                            Project: {{ project.title }}
                        </v-toolbar-title>
                        <v-spacer/>
                        <v-btn icon @click="$store.commit('dialog/image/show', { image: project.cover, title: project.title })">
                            <v-icon :size="($vuetify.display.lgAndDown) ? 'small' : 'default'" icon="mdi-open-in-full"/>
                        </v-btn>
                    </v-app-bar>
                    <v-card-text class="pt-0">
                        <v-img
                            :src="project.cover"
                            :class="{ 'thumbnail': $vuetify.display.smAndDown }"
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
                        <label-dev-tool v-for="tech in project.techStack" :key="tech" class="mx-2" :icon="$store.getters['technologies/stacks'][tech]['icon']" :size="small"/>
                    </v-card-actions>
                </v-card>
            </v-col>

            <!-- project intro -->
            <v-col cols="12" md="5" class="mb-5" :class="($vuetify.display.smAndDown ? 'px-7 ' : '') + $store.getters['breakpoints/font/p']">
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
                        <a :href="$store.getters['technologies/stacks'][tech].url" target="_blank" class="text-primary">{{ $store.getters['technologies/stacks'][tech].text }}</a><template v-if="project.techStack.length > 2 && index < (project.techStack.length - 1)">, </template><template v-if="index === (project.techStack.length - 2)"> and </template>
                    </template>.
                    I started it on {{ formatDate(project.timeFrame.start) }}
                    <template v-if="project.timeFrame.end">
                        then completed it on {{ formatDate(project.timeFrame.end) }}.
                    </template>
                    <template v-else>
                        and still open for changes and maintenance at present.
                    </template>
                </p>

                <div class="mt-7 primary lighten-5 py-3 px-2 text-center rounded">
                    <v-btn color="primary" v-if="project.repository" size="large" variant="text" @click="$store.commit('goto', project.repository)">
                        <v-icon size="small" start icon="mdi-github"/>
                        Repo<template v-if="!$vuetify.display.md || $vuetify.display.md && !project.production">sitory</template>
                    </v-btn>
                    <v-btn color="primary" v-if="project.production" size="large" variant="text" @click="$store.commit('goto', project.production)" :class="{ 'ml-3': project.repository }">
                        <v-icon size="small" start icon="mdi-open-in-new"/>
                        See Live
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import format from 'date-fns/format';

    export default {
        name: 'Projects',
        components: {
            'button-social' : defineAsyncComponent(() => import('../components/buttons/ButtonSocial.vue')),
            'button-org'    : defineAsyncComponent(() => import('../components/buttons/ButtonOrg.vue')),
            'label-dev-tool': defineAsyncComponent(() => import('../components/labels/LabelDevTool.vue')),
            'project'       : defineAsyncComponent(() => import('../components/cards/Project.vue')),
            'project-classy'             : defineAsyncComponent(() => import('../components/articles/ProjectSanayon.vue')),
            'project-schedule'           : defineAsyncComponent(() => import('../components/articles/ProjectSchedule.vue')),
            'project-dtr-lgu-nabua'      : defineAsyncComponent(() => import('../components/articles/ProjectDtrLguNabua.vue')),
            'project-lending-system'     : defineAsyncComponent(() => import('../components/articles/ProjectAppexGBLendingSystem.vue')),
            'project-pageant-tabulations': defineAsyncComponent(() => import('../components/articles/ProjectPageantTabulations.vue')),
            'project-sanayon'            : defineAsyncComponent(() => import('../components/articles/ProjectSanayon.vue')),
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
            },
            organizations() {
                return this.$store.getters['organizations/all'];
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
