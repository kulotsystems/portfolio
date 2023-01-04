<template>
    <div v-if="windowWidth > 600">
        <v-btn
            v-for="menuItem in menuItems"
            :key="menuItem.name"
            :variant="menuItem.name !== activeMenuItem ? 'text' : 'flat'"
            :class="(menuItem.name === activeMenuItem ? 'text-primary ' : '') + $store.getters['breakpoints/button/md']"
            :size="($vuetify.display.md || $vuetify.display.lg) ? 'large' : (($vuetify.display.xl) ? 'x-large' : 'default')"
            color="white"
            elevation="0"
            @click="menuClick(menuItem.name)"
            class="mx-1"
        >
            <v-icon :icon="menuItem.icon" start/>
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
