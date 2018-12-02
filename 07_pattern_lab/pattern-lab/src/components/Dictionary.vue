<template>
    <v-autocomplete v-model="searchInput" hint="search" :items="items" box chips color="blue-grey lighten-2"
                    label="Select" item-text="id" item-value="id" multiple
                    @change="sel => updateSelection(sel)">
        <v-slide-x-reverse-transition slot="append-outer" mode="out-in">
            <v-icon color="blue" v-text="'mdi-circle-edit-outline'"></v-icon>
        </v-slide-x-reverse-transition>
        <template slot="selection" slot-scope="data">
            <v-chip :selected="data.selected" close class="chip--select-multi" @input="remove(data.item)">
                <v-avatar style="width: 22px; height:20px; " class=" mr-2">
                    <img :src="'/public/img/miniPics/'+data.item.id + '.jpg'"
                         style="max-width: 100%; height: 100%;border-radius: 50%;" class="elevation-1">
                </v-avatar>
                {{data.item.name}}
            </v-chip>
        </template>
        <template slot="item" slot-scope="data">
            <v-list-tile-avatar>
                <img :src="'/public/img/miniPics/'+data.item.id + '.jpg'">
            </v-list-tile-avatar>
            <v-list-tile-content>
                <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="'/public/wc/'+data.item.id + '.js'"></v-list-tile-sub-title>
            </v-list-tile-content>
        </template>
    </v-autocomplete>
</template>

<script>
    import wcList from './wcList'

    export default {
        name: "my-dictionary",
        data() {
            return {
                searchInput: [{}],
                items: [],
                selected: [{}]
            }
        },
        methods: {
            createSearchList() {
                let Atoms = []
                let Molecules = []
                let Oranisms = []

                Object.keys(wcList).forEach((key) => {
                    let wc = wcList[key]
                    if (wc.type === 'Atom') {
                        Atoms.push(wc)
                    } else if (wc.type === 'Molecule') {
                        Molecules.push(wc)
                    } else {
                        Oranisms.push(wc)
                    }
                })

                Atoms.sort((a, b) => a.id - b.id)
                Molecules.sort((a, b) => a.id - b.id)
                Oranisms.sort((a, b) => a.id - b.id)

                Atoms.splice(0, 0, {header: 'Atoms'})
                Molecules.splice(0, 0, {divider: true}, {header: 'Molecules'})
                Oranisms.splice(0, 0, {divider: true}, {header: 'Organisms'})

                return Atoms.concat(Molecules.concat(Oranisms))
            },
            remove(item) {
                const index = this.searchInput.indexOf(item.id)

                if (index >= 0) {
                    this.searchInput.splice(index, 1)
                    this.$emit('remove', item.id)
                    let foundIndex = this.selected.findIndex(s => this.searchInput.indexOf(s) === -1) + 1
                    this.$delete(this.selected, foundIndex)
                }
            },
            updateSelection(selection) {
                if (selection.length > this.selected.length) {
                    this.$emit('showWebComponent', selection[selection.length - 1])
                    this.selected.push(selection[selection.length - 1])
                } else {
                    let removedItem = ""
                    this.selected.forEach((item, i) => {
                        if (i > 0) {
                            let foundIndex = this.selected.findIndex(s => selection.indexOf(s) === -1) + 1

                            removedItem = this.selected[foundIndex]
                            this.$delete(this.selected, foundIndex)

                            this.$emit('remove', removedItem)
                        }
                    })
                }
            }
        },
        created() {
            this.items = this.createSearchList()
        }
    }
</script>

<style scoped>

</style>