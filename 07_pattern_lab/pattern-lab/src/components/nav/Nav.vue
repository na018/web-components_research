<template>
    <div>
        <v-navigation-drawer fixed :mini-variant="miniVariant" v-model="drawer" app>
            <v-list>
                <v-list-tile v-for="(item, i) in items" :key="i" value="true">
                    <v-list-tile-action>
                        <v-icon light v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-content>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" :title="drawer ? 'hide navigation' : 'show navigation'">
                <v-icon v-html="!drawer ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <slot name="search"></slot>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <slot name="content"></slot>
        </v-content>
        <v-footer :fixed="fixed" app>
            <slot name="footer"></slot>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: "my-nav",
        props: {
            title: {
                type: String,
                default: 'Title'
            },
        },
        data() {
            return {
                items: [
                    {icon: 'bubble_chart', title: 'Inspire'}
                ],
                drawer: true,
                miniVariant: false,
                right: true,
                rightDrawer: false,
                fixed: true
            }
        },
    }
</script>

<style scoped>

</style>