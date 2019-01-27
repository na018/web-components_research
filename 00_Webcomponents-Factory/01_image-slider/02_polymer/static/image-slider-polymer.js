import {PolymerElement, html} from './node_modules/@polymer/polymer/polymer-element.js';
import './node_modules/@polymer/polymer/lib/elements/dom-repeat.js';

// Define the element's API using an ES2015 class
class ImageSliderComponent extends PolymerElement {

    // Define shadow DOM template
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
            <figure style="width: [[_figureWidth]]%;left: {{_left}}%;" >
                    <slot>
                       <!--      
                        <img src="/static/assets/img/pic-1.jpg" alt >
                        <img src="/static/assets/img/pic-2.jpeg" alt >
                        <img src="/static/assets/img/pic-3.jpeg" alt >
                        <img src="/static/assets/img/pic-4.jpeg" alt >
                        -->
                    </slot>
             </figure>
             <div class="controls">
               <template is="dom-repeat" items="{{_slides}}">
                 <span class$="{{_isSelected(index)}}" data-index$="[[index]]" on-click="_changeSlide"
                        >[[index]]</span>
                </template>
             </div>
         </div>
        <div class="arrow-left" on-click="_slide" data-index$="-1"></div>
        <div class="arrow-right" on-click="_slide" data-index$="1"></div>
        </div>
        `;
    }

    // Declare properties for the element's public API
    static get properties() {
        return {
            selectedindex: {
                type: Number,
                value: 0,
                notify: true,                          // notify host element on change (document.querySelector('image-slider').selectedIndex will not update - only via getAttribute)
                reflectToAttribute: true,               // synchronize with corresponding HTML attribute
                observer: '_selectedChanged'
            },
            _slides: {
                type: Array,
                value: []
            },
            _figureWidth: {
                type: Number,
                value: 0
            },
            _left: {
                type: Number,
                value: 0
            },
            _slideImgWidth: {
                type: Number,
                value: 0
            },
            _dots: {
                type: Array,
                value: []
            }
        }
    }
    _selectedChanged(newValue, oldValue) {
        if(oldValue>=0) {
            if(this._dots.length === 0) {
                this._dots = this.shadowRoot.querySelectorAll('.controls span')
            }
            this._dots[oldValue].classList.remove('selected')
            this._dots[newValue].classList.add('selected')
            this._left = -this.selectedindex * 100
        }
    }

    constructor() {
        super();
    }
    connectedCallback() {
        super.connectedCallback();
        this._prepareSlider();
    }

    ready() {
        super.ready();
    }

    /**
     *
     * @private
     */
    _prepareSlider() {
        const imgDomElemns = this.children
        this._figureWidth = (imgDomElemns.length + 1) * 100
        this._slideImgWidth = 100 / (imgDomElemns.length + 1)
        this._left = -this.selectedindex * 100
        for (let i = 0; i < imgDomElemns.length; i++) {
            imgDomElemns[i].style.width = this._slideImgWidth + '%';
            this._slides.push(i)
        }
    }

    /**
     *
     * @param index
     * @return {string}
     * @private
     */
    _isSelected(index) {
        return this.selectedindex === index ? 'selected' : '';
    }

    /**
     *
     * @param e
     * @param newIndex
     * @private
     */
    _changeSlide(e) {
        this.selectedindex = parseInt(e.currentTarget.dataset.index)
    }
    

    /**
     *
     * @param e
     * @private
     */
    _slide(e) {
        const i = parseInt(e.currentTarget.getAttribute('data-index$'))
        if((this.selectedindex>0 || this.selectedindex === 0 && i > 0 )&& this.selectedindex<this._slides.length-1){
            this.selectedindex += i
        }
    }

}

// Register the image-slider element with the browser
customElements.define('image-slider', ImageSliderComponent);