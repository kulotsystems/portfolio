<template>
    <div v-if="windowWidth > 600">
        <v-btn
            v-for="menuItem in menuItems"
            :key="menuItem.name"
            :text="menuItem.name !== activeMenuItem"
            :class="(menuItem.name === activeMenuItem ? (!$vuetify.theme.dark ? 'primary--text ' : 'white--text ') : (!$vuetify.theme.dark ? 'white--text ' : '')) + $store.getters['breakpoints/button/md']"
            :large="$vuetify.breakpoint.md || $vuetify.breakpoint.lg"
            :x-large="$vuetify.breakpoint.xl"
            :color="!$vuetify.theme.dark ? 'white' : (menuItem.name === activeMenuItem ? 'primary' : 'grey')"
            elevation="0"
            @click="menuClick(menuItem.name)"
            :width="$vuetify.breakpoint.lgAndDown ? 125 : 160"
            class="mx-1"
        >
            <v-icon left>{{ menuItem.icon }}</v-icon>
            {{ menuItem.text }}
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: 'TopButtonMenu',
        components: {},
        data() {
            return {
                // https://stackoverflow.com/questions/54166847/how-to-access-the-window-object-in-vue-js
                windowWidth: window.innerWidth
            }
        },
        computed: {
            menuItems() {
                return this.$store.getters['navigation/mainMenuItems'];
            },
            activeMenuItem() {
                return this.$store.getters['navigation/mainMenuActive'];
            }
        },
        methods : {
            menuClick(menuName) {
                if(menuName !== this.activeMenuItem) {
                    this.$store.commit('navigation/setActiveMainMenu', menuName);
                    this.$store.commit('dialog/loader/show');
                    this.$router.push({ name: menuName });
                }
                else if(menuName === 'projects') {
                    if(this.$route.params.slug)
                        this.$router.push({ name: 'projects' });
                }
            },

            onResize() {
                this.windowWidth = window.innerWidth;
            }
        },

        mounted() {
            this.$nextTick(() => {
                window.addEventListener('resize', this.onResize);
            });
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onResize);
        }
    }
</script>

<style scoped>

</style>
