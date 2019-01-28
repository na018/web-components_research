<template>
    <div class="container">
        <div class="image-wrapper">
            <figure :style="figureStyle">
                <slot>
                    <img src="/assets/img/pic-1.jpg" alt>
                    <img src="/assets/img/pic-2.jpeg" alt>
                    <img src="/assets/img/pic-3.jpeg" alt>
                    <img src="/assets/img/pic-4.jpeg" alt>
                </slot>
            </figure>
            <div class="controls">
                <span :class="{selected: 0 === sI}" @click="changeSlide(0)">0</span>
                <span v-for="slideIndex in (slideLength-1)"
                      :class="{selected: slideIndex===sI}"
                      @click="changeSlide(slideIndex)">{{slideIndex}}</span>
            </div>
        </div>
        <div class="arrow-left" @click="sI>0 ? slide(-1) : ''"></div>
        <div class="arrow-right" @click="sI<slideLength-1 ? slide(1) : ''"></div>
    </div>
</template>

<script>
    export default {
        name: "image-slider",
        computed: {
            figureStyle() {
                return {
                    width: (this.slideLength) * 100 + '%',
                    left: -this.sI * 100 + '%'
                }
            },
        },
        watch: {
            selectedindex(nweval) {
                this.sI = this.selectedindex
            }
        },
        props: {
            selectedindex: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                slides: [0, 1, 2, 3],
                slideLength: 1,
                sI: 0
            }
        },
        methods: {
            changeSlide(i) {
                this.$emit('updateSelectedIndex', i);
            },
            slide(i) {
                this.$emit('updateSelectedIndex', this.sI+i);
            },

        },
        mounted() {
            this.sI = this.selectedindex
            this.slideLength = this.$slots.default.length
            this.$slots.default.map(img => {
                img.elm.style.width = 100 / (this.slideLength) + '%'
            })
        }
    }
</script>

<style>
    div {
        padding: 0 40px;
        position: relative;
    }

    .image-wrapper {
        padding: 0;
    }

    div .arrow-left {
        border-top: 1px solid #afb1b2;
        border-left: 1px solid #afb1b2;
        width: 30px;
        height: 30px;
        transform: rotate(-45deg);
        position: absolute;
        top: 45%;
        left: 10px;
        cursor: pointer;
        padding: 0;
    }

    div .arrow-right {
        border-top: 1px solid #afb1b2;
        border-right: 1px solid #afb1b2;
        width: 30px;
        height: 30px;
        transform: rotate(45deg);
        position: absolute;
        top: 45%;
        right: 10px;
        cursor: pointer;
        padding: 0;
    }

    div > div {
        overflow-x: hidden;
    }

    div > div figure {
        min-height: 200px;
        background: grey;
        transition: .7s ease;
        position: relative;
        width: 600%;
        margin: 0;
        left: 0;
        text-align: left;
        font-size: 0;
        animation: 25s slidy infinite;
    }

    div > div figure img {
        width: 20%;
        float: left;
        cursor: pointer;
        height: 400px;
    }

    div > div figure img:hover {
        -webkit-transform: scale(1.03);
        -ms-transform: scale(1.03);
        transform: scale(1.03);
        transition: .4s;
        cursor: pointer;
    }

    div > div .controls {
        text-align: center;
    }

    div > div .controls span:hover {
        background: #9e0317;
    }

    div > div .controls span {
        border-radius: 50%;
        width: .5rem;
        height: .5rem;
        padding: 0;
        margin: 1.5rem .375rem 0;
        background-color: #c8cacb;
        color: transparent;
        display: inline-block;
        cursor: pointer;
    }

    div > div .controls span.selected {
        background-color: #d5001c;
    }
</style>