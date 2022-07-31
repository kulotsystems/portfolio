<template>
    <v-card align="center" height="100%" class="primary lighten-5 border--primary" hover>
        <v-toolbar class="transparent" flat dense>
            <v-spacer/>
            <v-menu offset-y transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                </template>
                <v-list dense class="pa-0">
                    <v-list-item class="pa-0" v-if="pullRequest">
                       <v-btn block tile text color="primary" @click="goto(pullRequest)">
                           <v-icon small left>open_in_new</v-icon>
                           <span>Pull Request</span>
                       </v-btn>
                    </v-list-item>
                    <v-list-item class="pa-0" v-if="review.socials.twitter !== ''">
                        <v-btn block tile text color="primary" @click="goto(review.socials.twitter)">
                            <v-icon small left>$twitter</v-icon>
                            Twitter
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="pa-0" v-if="review.socials.facebook !== ''">
                        <v-btn block tile text color="primary" @click="goto(review.socials.facebook)">
                            <v-icon small left>$facebook</v-icon>
                            Facebook
                        </v-btn>
                    </v-list-item>
                    <v-list-item class="pa-0" v-if="review.socials.github !== ''">
                        <v-btn block tile text color="primary" @click="goto(review.socials.github)">
                            <v-icon small left>$github</v-icon>
                            GitHub
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar>
        <v-card-text class="pt-0">
            <div class="mb-6">
                <v-avatar size="120">
                    <v-img v-if="avatar" :src="avatar">
                        <template v-slot:placeholder>
                            <v-skeleton-loader type="card-avatar"/>
                        </template>
                    </v-img>
                    <v-img v-else class="primary lighten-3"/>
                </v-avatar>
            </div>
            <v-rating :value="review.review.rating" class="mb-4" readonly dense style="opacity: 0.8" half-increments/>
            <p class="review primary--text text--darken-2" :class="{ 'text-body-1': $vuetify.breakpoint.smAndDown, 'text-h6': $vuetify.breakpoint.mdAndUp }">
                {{ review.review.content }}
            </p>
        </v-card-text>
        <div class="primary--text pt-4 review-footer">
            <p class="text-subtitle-2 text-md-subtitle-1 font-weight-bold mb-0">{{ fullName }}</p>
            <p><small>{{ role }}</small></p>
        </div>
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
        }
    }
</script>

<style scoped>
    .v-card__text {
        margin-bottom: 60px !important;
    }

    .review.text-body-1 {
        line-height: 28px;
    }

    .review.text-h6 {
        line-height: 35px;
    }

    .review-footer {
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    .v-list-item .v-btn {
        justify-content: start;
    }
</style>
