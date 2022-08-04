<template>
    <div>
        <v-btn
            v-for="menuItem in menuItems"
            :key="menuItem.name"
            :text="menuItem.name !== activeMenuItem"
            :class="(menuItem.name === activeMenuItem ? 'primary--text ' : '') + $store.getters['breakpoints/button/md']"
            :large="$vuetify.breakpoint.md || $vuetify.breakpoint.lg"
            :x-large="$vuetify.breakpoint.xl"
            color="white"
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
            return {}
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
            }
        }
    }
</script>

<style scoped>

</style>
