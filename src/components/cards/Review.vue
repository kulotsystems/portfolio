<template>
    <v-card align="center" height="100%" class="primary lighten-5">
        <v-card-text>
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
            <p class="review text-body-1 primary--text text--darken-2">
                {{ review.review.content }}
            </p>
        </v-card-text>
        <div class="primary--text py-4 review-footer">
            <p class="text-body-1 font-weight-bold mb-0">{{ fullName }}</p>
            <p>{{ role }}</p>
            <button-social v-if="review.socials.facebook !== ''" :url="review.socials.facebook" class="mx-1" small text outlined>$facebook</button-social>
            <button-social v-if="review.socials.twitter !== ''"  :url="review.socials.twitter" class="mx-1"  small text outlined>$twitter</button-social>
            <button-social v-if="review.socials.github   !== ''" :url="review.socials.github"   class="mx-1" small text outlined>$github</button-social>
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
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .v-card__text {
        margin-bottom: 120px !important;
    }

    .review {
        line-height: 27px;
    }

    .review-footer {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
</style>
