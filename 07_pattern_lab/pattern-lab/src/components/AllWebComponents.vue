<template>
    <div class="grid fr3">
        <wc-template-molecules v-for="(wc, i) in wcList" :key="i"
                :wcID="wc.id" v-if="activeComponents.indexOf(wc.id) !== -1"></wc-template-molecules>

    </div>
</template>

<script>
    import MyDictionary from "./Dictionary";
    import WcTemplateMolecules from "./WebComponents/Molecules/wc-template";
    import wcList from './wcList'

    export default {
        name: "AllWebComponents",
        components: {WcTemplateMolecules},
        props: {
            activeComponents: {
                type: Array
            },
        },
        data() {
            return {
                complete: 30,
                wcList
            }
        },
    }
</script>
<style lang="scss">
    .grid {
        display: grid;
        &.fr3{
            grid-template-columns: repeat(3, 1fr);
            grid-gap:5px;
            @media all and (max-width: 960px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media all and (max-width: 700px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }
</style>

