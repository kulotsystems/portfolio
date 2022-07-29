<template>
    <v-card align="center" height="100%" class="primary lighten-5">
        <v-card-text>
            <div class="mb-5">
                <v-avatar size="120">
                    <v-img :src="avatar"/>
                </v-avatar>
            </div>
            <p class="review text-body-1 primary--text text--darken-2">
                {{ review.review.content }}
            </p>
        </v-card-text>
        <v-card-subtitle class="pt-0 primary--text">
            <p class="text-body-1 font-weight-bold mb-0">{{ fullName }}</p>
            <p class="mb-0">{{ role }}</p>
        </v-card-subtitle>
        <v-card-actions class="justify-center pt-0">
            <button-social v-if="review.socials.facebook !== ''" :url="review.socials.facebook" class="mx-1" small text outlined>$facebook</button-social>
            <button-social v-if="review.socials.twitter !== ''"  :url="review.socials.twitter" class="mx-1"  small text outlined>$twitter</button-social>
            <button-social v-if="review.socials.github   !== ''" :url="review.socials.github"   class="mx-1" small text outlined>$github</button-social>
        </v-card-actions>
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
                fullName += personal.firstName + ' ';
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
        methods : {},
        created() {
            console.log(this.review);
        }
    }
</script>

<style scoped>
    .review {
        line-height: 27px;
    }
</style>
