<template>
<v-bottom-navigation v-if="windowHeight > 512" app grow :value="activeMenuItem.index" active-class="primary white--text" :height="48" fixed>
        <v-btn
            v-for="menuItem in menuItems"
            :key="menuItem.name"
            @click="menuClick(menuItem.name)"
        >
            <span :class="{
                'primary--text': menuItem.name !== activeMenuItem.item.name,
                'grey--text'   : menuItem.name !== activeMenuItem.item.name && $vuetify.theme.dark
            }">{{ menuItem.text }}</span>
            <v-icon>{{ menuItem.icon }}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        name: 'BottomNavMenu',
        components: {},
        data() {
            return {
                // https://stackoverflow.com/questions/54166847/how-to-access-the-window-object-in-vue-js
                windowHeight: window.innerHeight
            }
        },
        computed: {
            menuItems() {
                return this.$store.getters['navigation/mainMenuItems'];
            },
            activeMenuItem() {
                let activeMenuItem = {
                    index: 0,
                    item : null
                };
                for(let i=0; i<this.menuItems.length; i++) {
                    if(this.menuItems[i].name === this.$store.getters['navigation/mainMenuActive']) {
                        activeMenuItem.index = i;
                        activeMenuItem.item  = this.menuItems[i];
                        break;
                    }
                }
                return activeMenuItem;
            }
        },
        methods: {
            menuClick(menuName) {
                if(menuName !== this.activeMenuItem.item.name) {
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
                this.windowHeight = window.innerHeight
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
    .v-btn {
        height: 100% !important;
    }
</style>
