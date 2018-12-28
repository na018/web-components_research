<template>
    <div>
        <v-card>
            <v-card-title class="blue white--text">{{item.name}}</v-card-title>
            <v-card-text>
                <div class="markup-eg purple lighten-5 pa-2 elevation-1 ">
                    <h3> Example Markup:</h3>
                    <v-divider></v-divider>
                    <div class="white ma-1 pa-2 elevation-2">
                        &lt;<span class="red--text">{{item.id}}</span>
                        <span v-for="(property, i) in item.properties" :key="i">
                        <span class="orange--text text--darken-1">&nbsp; {{property.name}}</span>
                        <span>="</span>
                        <span class="green--text ">{{property.default}}</span>"
                    </span>
                        &gt;&lt;&#92; <span class="red--text">{{item.id}}</span>&gt;
                    </div>
                    <div class="grid fr2 pt-2">
                        <div>Element name:</div>
                        <div class="red--text">{{item.id}}</div>
                        <div v-if="item.properties.length > 0">Properties:</div>
                        <div v-if="item.properties.length > 0">
                            <div v-for="(property, i) in item.properties" :key="i">
                                <span class="orange--text text--darken-1 ">{{property.name}}</span>
                                <span class="blue--text text--darken-4 font-italic"> <{{property.type}}> </span><span
                                    class="grey--text"> // {{property.default}}</span>
                            </div>
                        </div>
                        <div v-if="item.contentTypes.length > 0">Slot Element Types:</div>
                        <div v-if="item.contentTypes.length > 0">
                            <div v-for="(contentType,i) in item.contentTypes" :key="i">
                                &lt;<span class="red--text">{{contentType.tagName}}</span>
                                <span v-for="(attr, i) in contentType.attributes" :key="i">
                                    <span class="orange--text text--darken-1">&nbsp; {{Object.keys(attr)[0]}}</span>
                                    <span>="</span>
                                    <span class="green--text font-italic">{{attr[Object.keys(attr)[0]]}}</span>"
                                </span>&gt;
                            </div>
                        </div>
                    </div>
                    <div>Open script in new tab: <a :href="'/public/webcomponents/'+item.id + '.js'" target="_blank">{{item.id + '.js'}}</a></div>
                </div>
                <div class="py-3">
                    <h4>Rendered Component:</h4>
                    <div v-for="(property, i) in item.properties" :key="i" class="grid fr2 px-3">
                        <div>{{property.name}}:</div>
                        <v-slider v-if="property.type === 'Number'" v-model="property.custom"
                                  class="mt-0 pt-0"></v-slider>
                        <v-text-field v-else-if="property.type === 'String'" v-model="property.custom"
                                      class="mt-0 pt-0"></v-text-field>
                        <div v-else class="blue-grey--text text--darken-1">e.g. {{property.default}}</div>
                    </div>
                </div>

                <div v-html="wcElem"></div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import wcList from '../../wcList'

    export default {
        name: "wc-template-molecule",
        props: {
            wcID: {
                type: String,
                required: true
            }
        },
        computed: {
            customProperties() {
                this.elem = this.createWC()
                return this.item.properties.forEach(prop => prop.custom)
            },
            wcElem() {
                return this.item.content.length > 0 ? this.createWCwithContent() : this.createWC()
            }
        },
        watch: {
            customProperties() {
            }
        },
        data() {
            return {
                item: {
                    id: 'progress-bar',
                    name: 'Progress Bar',
                    properties: [
                        {
                            name: 'complete',
                            type: 'Number',
                            default: 30,
                            custom: 30
                        },
                        {
                            name: 'title',
                            type: 'String',
                            default: 'hello world',
                            custom: 'hello world'
                        },
                        {
                            name: 'crazyArray',
                            type: 'Array',
                            default: '[1,2,3,4]',
                            custom: '[1,2,3,4]'
                        }
                    ]
                },
                elem: ""
            }
        },
        methods: {
            createWC() {
                let wc = '<' + this.item.id + ' '

                this.item.properties.forEach((prop) => {
                    wc += prop.name + '="' + prop.custom + '" '
                })
                wc += '></' + this.item.id + '>'

                return wc;
            },
            createWCwithContent() {
                let wc = '<' + this.item.id + ' '

                this.item.properties.forEach((prop) => {
                    wc += prop.name + '="' + prop.custom + '" '
                })
                wc += '>';
                this.item.content.forEach(elem => {
                    wc += elem
                })
                wc += '</' + this.item.id + '>'
                console.log(wc)

                return wc;
            }
        },
        created() {
            //  this.elem = `<${this.item.name} complete="30"></${this.item.name}>`
            this.item = wcList[this.wcID]
            console.log('created', this.item)
            if (this.item.content && this.item.content.length > 0) {
                console.log('created', this.item.content)
                this.elem = this.createWCwithContent()
            } else {
                // this.elem = this.createWC();
            }

        }
    }
</script>
<style lang="scss">
    .grid {
        display: grid;
        grid-row-gap: 5px;
        &.fr2 {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
