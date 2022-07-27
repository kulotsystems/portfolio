<template>
    <v-bottom-navigation app grow :value="activeMenuItem.index" active-class="info white--text" :height="48">
        <v-btn
            v-for="menuItem in menuItems"
            :key="menuItem.name"
            @click="menuClick(menuItem.name)"
        >
            <span :class="{ 'info--text': menuItem.name !== activeMenuItem.item.name }">{{ menuItem.text }}</span>
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
            }
        }
    }
</script>

<style scoped>
    .v-btn {
        height: 100% !important;
    }
</style>
