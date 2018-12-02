<template>
    <v-app light>
        <my-nav :title="title">
            <template slot="search">
                <my-dictionary @showWebComponent="item => {webcomponents.push(item)}" @remove="id => removeWC(id)"
                               class="mx-5"></my-dictionary>
            </template>
            <template slot="content">
                <all-web-components :active-components="webcomponents" class="pa-5"></all-web-components>
            </template>
        </my-nav>
    </v-app>
</template>

<script>
    import MyDictionary from "./components/Dictionary";
    import AllWebComponents from "./components/AllWebComponents";
    import MyNav from "./components/nav/Nav";

    export default {
        components: {MyNav, AllWebComponents, MyDictionary},
        data() {
            return {
                webcomponents: [],
                title: 'Pattern Lab'
            }
        },
        methods: {
            removeWC(id) {
                const index = this.webcomponents.indexOf(id)
                if (index >= 0) {
                    this.$delete(this.webcomponents, index)
                }
            }
        },
    }
</script>
