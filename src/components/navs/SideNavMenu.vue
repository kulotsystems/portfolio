<template>
    <v-list rounded>
        <v-list-item-group
            color="primary"
            active-class="primary white--text"
            :value="activeMenuItem.index"
        >
            <v-list-item
                v-for="menuItem in menuItems"
                :key="menuItem.name"
                @click="menuClick(menuItem.name)"
                :class="{ 'primary': menuItem.name === activeMenuItem.item.name }"
            >
                <v-list-item-icon>
                    <v-icon :color="menuItem.name === activeMenuItem.item.name ? 'white' : 'primary'">{{ menuItem.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title :class="{ 'white--text': menuItem.name === activeMenuItem.item.name, 'primary--text': menuItem.name !== activeMenuItem.item.name}">{{ menuItem.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
    export default {
        name: 'SideNavMenu',
        components: {},
        data() {
            return {}
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
        methods : {
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

</style>
