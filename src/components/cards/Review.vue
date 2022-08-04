<template>
    <v-card class="fill-height transparent" flat>
        <v-card-text class="pa-0">
            <v-row justify="center">
                <v-col cols="12" sm="11" md="10" lg="8" class="pa-0">
                    <v-list-item class="px-3 px-sm-0" three-line>
                        <v-list-item-avatar tile :size="avatarSize">
                            <v-img v-if="avatar" :src="avatar" style="border-radius: 100%">
                                <template v-slot:placeholder>
                                    <v-skeleton-loader type="card-avatar"/>
                                </template>
                            </v-img>
                            <v-img v-else class="primary lighten-3"/>
                        </v-list-item-avatar>
                        <v-list-item-content class="pa-0">
                            <div class="justify-center">
                                <div style="display: flex;">
                                    <v-rating :value="review.review.rating" class="pt-1 pt-xl-2" style="opacity: 0.65" readonly dense half-increments/>
                                    <v-spacer/>
                                    <v-menu content-class="dropdown" offset-y transition="slide-y-transition">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn icon v-bind="attrs" v-on="on" :large="$vuetify.breakpoint.xl">
                                                <v-icon>more_vert</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense class="pa-0">
                                            <v-list-item class="pa-0" v-if="pullRequest">
                                                <v-btn block tile text color="primary" :class="$store.getters['breakpoints/button/md']" @click="goto(pullRequest)">
                                                    <v-icon small left>open_in_new</v-icon>
                                                    <span>Pull Request</span>
                                                </v-btn>
                                            </v-list-item>
                                            <v-list-item class="pa-0" v-if="review.socials.twitter !== ''">
                                                <v-btn block tile text color="primary" :class="$store.getters['breakpoints/button/md']" @click="goto(review.socials.twitter)">
                                                    <v-icon small left large>$twitter</v-icon>
                                                    Twitter
                                                </v-btn>
                                            </v-list-item>
                                            <v-list-item class="pa-0" v-if="review.socials.facebook !== ''">
                                                <v-btn block tile text color="primary" :class="$store.getters['breakpoints/button/md']" @click="goto(review.socials.facebook)">
                                                    <v-icon small left>$facebook</v-icon>
                                                    Facebook
                                                </v-btn>
                                            </v-list-item>
                                            <v-list-item class="pa-0" v-if="review.socials.github !== ''">
                                                <v-btn block tile text color="primary" :class="$store.getters['breakpoints/button/md']" @click="goto(review.socials.github)">
                                                    <v-icon small left>$github</v-icon>
                                                    GitHub
                                                </v-btn>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                                <v-list-item-title class="mb-1 mb-xl-0 pl-1 dark--text text--lighten-1" :class="$store.getters['breakpoints/font/p']">
                                    {{ fullName }}
                                </v-list-item-title>
                                <v-list-item-subtitle class="pl-1" :class="$store.getters['breakpoints/font/xSmall']">
                                    {{ role }}
                                </v-list-item-subtitle>
                            </div>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="px-3 px-sm-0 info--text text--lighten-3 font-weight-bold" :class="$store.getters['breakpoints/font/small']">
                        <p><q>{{ review.review.content }}</q></p>
                    </v-list-item>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: 'Review',
        props: {
            review: {
                type   : Object,
                default: null
            }
        },
        components: {},
        data() {
            return {

            }
        },
        computed: {
            avatar() {
                let avatar = null;
                if(this.review.socials.github !== '')
                    avatar = `${this.review.socials.github}.png`;
                return avatar;
            },
            avatarSize() {
                let size = 100;
                if(this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg)
                    size = 120;
                else if(this.$vuetify.breakpoint.xl)
                    size = 140;
                return size;
            },
            fullName() {
                const personal = this.review.personal;
                let fullName = '';
                if(personal.title !== '')
                    fullName += personal.title + ' ';
                fullName += (personal.firstName === '' ? 'Poop' : personal.firstName) + ' '; // told ya
                if(personal.middleName !== '')
                    fullName += personal.middleName.substr(0, 1) + '. ';
                fullName += personal.lastName;
                if(personal.nameSuffix !== '')
                    fullName += ' ' + personal.nameSuffix;
                return fullName;
            },
            role() {
                const as = this.review.review.as;
                let roles = [];
                for(let i=0; i<as.length; i++) {
                    if(as[i].trim() !== '')
                        roles.push(as[i].substr(0, 1).toUpperCase() + as[i].substr(1, as[i].length-1).toLowerCase());
                }
                return roles.join(', ');
            },
            pullRequest() {
                const pullRequests = this.$store.getters['pullRequests/reviews'];
                let pullRequest = null;
                if(pullRequests[this.review.module])
                    pullRequest = pullRequests[this.review.module];
                return pullRequest;
            }
        },
        methods: {
            goto(url) {
                window.open(url, '_blank');
            }
        },
        created() {
            console.log(this.$store.getters.fontBody);
        }
    }
</script>

<style scoped>
    .dropdown .v-list-item .v-btn {
        justify-content: start;
    }
</style>
