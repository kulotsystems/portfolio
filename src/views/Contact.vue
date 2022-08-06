<template>
    <v-container class="pl-md-0 pb-5 pb-md-12">
        <v-card flat class="transparent mt-2 mt-sm-3 mt-md-4">
            <v-card-text>
                <p class="text-h4 text-md-h3 text-xl-h2 font-weight-bold mb-0">
                    Contact Me
                </p>
            </v-card-text>

            <v-card-subtitle :class="$store.getters['breakpoints/font/p']">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto autem eius excepturi, exercitationem iusto labore, magnam nemo nobis nostrum numquam placeat quae quibusdam quisquam ratione repellat sed, veritatis voluptatem!</p>
            </v-card-subtitle>
        </v-card>

        <v-lazy v-model="$store.state.transitions.lazy.contact.form" transition="slide-x-transition">
            <v-row>
                <v-col cols="12" md="10" lg="8" xl="6">
                    <v-card class="transparent" flat>
                        <v-card-text>
                            <v-form @submit.prevent="send" ref="contactForm">
                                <v-text-field
                                    v-model="form.name"
                                    label="Name / Company"
                                    type="text" class="mb-2"
                                    :rules="[rules.required]"
                                    :readonly="sending"
                                    outlined
                                />
                                <v-text-field
                                    v-model="form.email"
                                    label="E-mail address"
                                    type="email"
                                    class="mb-2"
                                    :rules="[rules.required, rules.email]"
                                    :readonly="sending"
                                    outlined
                                />
                                <v-textarea
                                    v-model="form.message"
                                    label="Message"
                                    class="mb-2"
                                    :rules="[rules.required, rules.max_chars(form.message, counter.message.max)]"
                                    counter
                                    :maxlength="counter.message.max"
                                    :readonly="sending"
                                    outlined
                                />
                                <v-alert v-if="error" class="mb-8" color="error" outlined>
                                    <template v-if="error.message">
                                        {{ error.message }}
                                        <ul v-if="error.response.data.errors">
                                            <li v-for="err in error.response.data.errors">{{ err[0] }}</li>
                                        </ul>
                                    </template>
                                    <template v-else>
                                        {{ error }}
                                    </template>
                                </v-alert>
                                <v-btn
                                    color="primary"
                                    large
                                    depressed
                                    :loading="sending"
                                    @click="preview"
                                >
                                    <v-icon left>arrow_forward</v-icon>
                                    Preview
                                </v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-lazy>


        <v-dialog v-model="previewing" scrollable max-width="640px">
            <v-card flat>
                <v-card-title>
                    <span class="primary--text lighten-1" :class="$store.getters['breakpoints/font/h3']">Message Preview</span>
                    <v-spacer/>
                    <v-btn icon @click="previewing = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text class="pt-4">
                    <p class="mb-0 font-weight-bold" :class="$store.getters['breakpoints/font/xSmall']">Name / Company</p>
                    <p class="mb-8" :class="$store.getters['breakpoints/font/xSmall']">{{ form.name }}</p>

                    <p class="mb-0 font-weight-bold" :class="$store.getters['breakpoints/font/xSmall']">E-mail Address</p>
                    <p class="mb-8" :class="$store.getters['breakpoints/font/xSmall']">{{ form.email }}</p>

                    <p class="mb-0 font-weight-bold" :class="$store.getters['breakpoints/font/xSmall']">Message</p>
                    <p :class="$store.getters['breakpoints/font/xSmall']" style="white-space: pre-line">{{ form.message }}</p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn depressed large text @click="previewing = false">Cancel</v-btn>
                    <v-btn color="primary" depressed large @click="send">Send</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-dialog v-model="confirming" scrollable max-width="480px" persistent>
            <v-card flat>
                <v-card-title>
                    <span class="primary--text lighten-1" :class="$store.getters['breakpoints/font/h3']">Confirmation</span>
                    <v-spacer/>
                    <v-btn icon @click="confirm">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text class="pt-4">
                    <p :class="$store.getters['breakpoints/font/small']">
                        THANK YOU for contacting me, <span class="primary--text">{{ form.name }}</span>.
                    </p>
                    <p class="mb-0" :class="$store.getters['breakpoints/font/small']">
                        I will get in touch with you soon.
                    </p>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn depressed large text @click="confirm">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import { load } from 'recaptcha-v3';
    import axios from 'axios';

    export default {
        name: 'Contact',
        components: {},
        data() {
            return {
                form: {
                    name   : '',
                    email  : '',
                    message: ''
                },
                previewing: false,
                confirming: false,
                counter: {
                    message: {
                        chars: 0,
                        max  : 3000
                    }
                },
                rules: {
                    required: v => {
                        return v.trim().length > 0 || 'This field is required.'
                    },
                    email: v => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(v) || 'Invalid e-mail address.'
                    },
                    max_chars: (v, m, a) => {
                        if(a == null)
                            a = 'characters';
                        return v != null ? v.toString().length <= m || 'Maximum ' + a + ': ' + m.toString() + '.' : true;
                    }
                },
                sending: false,
                error  : null
            }
        },
        computed: {},
        methods : {
            preview() {
                const contactForm = this.$refs.contactForm;
                if(contactForm.validate() && !this.sending) {
                    this.previewing = true;
                }
            },
            send() {
                this.$store.commit('dialog/loader/show');
                this.previewing = false;
                const contactForm = this.$refs.contactForm;
                if(contactForm.validate() && !this.sending) {
                    this.sending = true;
                    this.error   = null;

                    const siteKey  = '6Lf9HVAhAAAAAHxMVa_vdI1n4wt8tR-7aSjaFczb';
                    const endpoint = 'https://www.kulotsystems.tech/api/portfolio/contact';
                    load(siteKey)
                        .then(recaptcha => {
                            recaptcha.execute('submit')
                                .then(token => {
                                    axios.post(endpoint, {
                                        token, ...this.form,
                                    })
                                        .then(response => {
                                            this.$store.commit('dialog/loader/hide');
                                            this.sending    = false;
                                            this.confirming = true;
                                            // console.log(response.data);
                                        })
                                        .catch(error => {
                                            this.$store.commit('dialog/loader/hide');
                                            this.sending = false;
                                            this.error   = error;
                                        });
                                })
                                .catch(error => {
                                    this.$store.commit('dialog/loader/hide');
                                    this.sending = false;
                                    this.error   = error;
                                });
                        })
                        .catch(error => {
                            this.$store.commit('dialog/loader/hide');
                            this.sending = false;
                            this.error   = error;
                        });
                }
                else
                    this.sending = false;
            },

            confirm() {
                this.confirming = false;
                this.form.name    = '';
                this.form.email   = '';
                this.form.message = '';
                this.$refs.contactForm.resetValidation();
            }
        },
        created() {
            this.$store.commit('navigation/setActiveMainMenu', 'contact');
        },
        mounted() {
            this.$store.commit('dialog/loader/hide');
        }
    }
</script>

<style scoped>

</style>
