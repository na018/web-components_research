import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

// Define the element's API using an ES2015 class
class ImageSliderComponent extends PolymerElement {

    // Define optional shadow DOM template
    static get template() {
        return html`
    <style>
      :host>div{padding:0 40px;position:relative;display:inline-block}
      :host>div .arrow-left{border-top:1px solid #afb1b2;border-left:1px solid #afb1b2;width:30px;height:30px;transform:rotate(-45deg);position:absolute;top:45%;left:0;cursor:pointer}
      :host>div .arrow-right{border-top:1px solid #afb1b2;border-right:1px solid #afb1b2;width:30px;height:30px;transform:rotate(45deg);position:absolute;top:45%;right:0;cursor:pointer}
      :host>div>div{overflow-x:hidden}
      :host>div>div figure{min-height:200px;background:grey;transition:.7s ease;position:relative;width:600%;margin:0;left:0;text-align:left;font-size:0;animation:25s slidy infinite}:host>div>div figure 
      ::slotted(img){float:left;cursor:pointer; height:400px;}:host>div>div figure 
      ::slotted(img:hover){-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);transition:.4s;cursor:pointer}:host>div>div .controls{text-align:center}
      :host>div>div .controls span:hover{background: #9e0317;}
      :host>div>div .controls span{border-radius: 50%;width:.5rem;height:.5rem;padding:0;margin:1.5rem .375rem 0;background-color:#c8cacb;color:transparent;display:inline-block;cursor:pointer}
      :host>div>div .controls span.selected{background-color:#d5001c}
        </style>
        <div>
        <div>
            <figure style="width: [[figureWidth]]%;" >
                    <slot>
                  <!--      <img src="/static/assets/img/pic-1.jpg" alt >
                        <img src="/static/assets/img/pic-2.jpeg" alt >
                        <img src="/static/assets/img/pic-3.jpeg" alt >
                        <img src="/static/assets/img/pic-4.jpeg" alt >-->
                    </slot>
             </figure>
             <div class="controls">
               <template is="dom-repeat" items="{{slides}}">
                 <span class$="[[item.selected]]" index$="[[index]]"  id$="control-[[index]]"
                        >[[index]]</span>
                </template>
             </div>
         </div>
        <div class="arrow-left" on-click="decrement"></div>
        <div class="arrow-right" on-click="increment"></div>
        </div>
        `;
    }

    // Declare properties for the element's public API
    static get properties() {
        return {
            selectedIndex: {
                type: Number,
                value: 0,
                notify: true,                          // notify host element on change
                reflectToAttribute: true               // synchronize with corresponding HTML attribute
            },
            slides: {
                type: Array,
                value: [],
                notify: true,
                reflectToAttribute: true
            },
            figureWidth: {
                type: Number,
                value: 0
            },
            slideWidth: {
                type: Number,
                value: 0
            }
        }
    }

    constructor() {
        super();
       // this.addEventListener('click', this.clicked.bind(this));
       // console.log(this.querySelectorAll('*'))


    }

    ready(){
        super.ready();
        const imgDomElemns = this.querySelectorAll('img')
        this.figureWidth = (imgDomElemns.length +1) * 100
        this.slideWidth = 100/ (imgDomElemns.length +1)
        let dots = []
        for(let i=0; i< imgDomElemns.length; i++) {
            imgDomElemns[i].style.width = 100 / (imgDomElemns.length+1) + '%';
           /* const _slide= this.slides[i];
            _slide.style.height = '400px';
            _slide.style.width = 100 / (this.slides.length+1) + '%';
            _slide.style.cursor = 'pointer';*/
            this.slides.push({
                selected: this.isSelected(i)
            })
        }

   /*     const me = this;
        for(let i=0; i< imgDomElemns.length; i++) {
            console.log(this.$)
            this.$['control-'+i].addEventListener('click', function (ev) {
                console.log(this, ev)
                me.changeSlide(i)
            })
        }*/

    }
/*    ready() {
        this.slides = this.querySelectorAll('img')
        console.log()
        for(let i=0; i< this.slides.length; i++) {
            const _slide= this.slides[i];
            _slide.style.height = '400px';
            _slide.style.width = 100 / (this.slides.length+1) + '%';
            _slide.style.cursor = 'pointer';
        }
    }*/
    isSelected(index) {
        console.log(this, index)
        return this.selectedIndex === index ? 'selected' : '';
    }

    /**
     * Define callback function for the event listener
     */
    changeSlide(i) {
        console.log(i, this)
        this.selectedIndex = i;
    }
    increment() {this.slide(1)}
    decrement() {this.slide(-1)}
    slide(i) {
        if((this.selectedIndex>0 || this.selectedIndex === 0 && i > 0 )&& this.selectedIndex<this.slides.length-1){
            this.selectedIndex += i;
        }
    }

}

// Register the x-custom element with the browser
customElements.define('image-slider', ImageSliderComponent);