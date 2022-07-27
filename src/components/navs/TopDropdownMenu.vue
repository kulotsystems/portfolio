<template>
    <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
            <v-btn text color="white" v-bind="attrs" v-on="on" width="125" class="mx-1" style="justify-content: right">
                {{ activeMenuItem.text }}
                <v-icon right>more_vert</v-icon>
            </v-btn>
        </template>
        <v-list dense>
            <v-list-item
                v-for="menuItem in menuItems"
                :key="menuItem.name"
                @click="menuClick(menuItem.name)"
                :class="{ 'info white--text': menuItem.name === activeMenuItem.name, 'info--text': menuItem.name !== activeMenuItem.name}"
            >
                <v-list-item-title>
                    <span class="text-button">{{ menuItem.text }}</span>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        name: 'TopDropdownMenu',
        components: {},
        data() {
            return {}
        },
        computed: {
            menuItems() {
                return this.$store.getters['navigation/mainMenuItems'];
            },
            activeMenuItem() {
                let activeMenuItem = null;
                for(let i=0; i<this.menuItems.length; i++) {
                    if(this.menuItems[i].name === this.$store.getters['navigation/mainMenuActive']) {
                        activeMenuItem = this.menuItems[i];
                        break;
                    }
                }
                return activeMenuItem;
            }
        },
        methods: {
            menuClick(menuName) {
                if(menuName !== this.activeMenuItem.name) {
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
