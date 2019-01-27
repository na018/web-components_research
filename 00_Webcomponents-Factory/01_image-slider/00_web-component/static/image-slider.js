class ImageSlider extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this._selected = parseInt(this.getAttribute('selectedindex')) | 0;
        this._dots = [];
        this.generateTemplate();
        this._fig = this.shadow.querySelector('figure');
    }
    get selectedIndex() {
        return this._selected;
    }

    set selectedIndex(val) {
        this._selected = val;
        this.setAttribute('selected-index', val);
    }
    static get observedAttributes() {
        return ['selected-index'];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'selected-index':
                if(oldVal !== newVal && this._dots[parseInt(oldVal)]) {
                    this._dots[parseInt(oldVal)].classList.remove('selected')
                    this._selected = parseInt(newVal, 10) || 0;
                    this._dots[parseInt(newVal)].classList.add('selected')
                    this._fig.style.left = (-(parseInt(newVal) ) * 100) + '%';
                }
        }
    }
// lazy properties
    connectedCallback() {
        const slot = this.shadow.querySelector('slot');
        const fig = this.shadow.querySelector('figure');
        const slotChildren = slot.assignedNodes()

        let  amount = slotChildren.filter(c => c.nodeName === 'IMG').length;
        let counter = 0
        let controls = document.createElement('div')
        let dots = this._dots
        let selectedIndex = this.selectedIndex
        slotChildren.forEach((child, i)=> {
            if(child.nodeName === 'IMG') {
                child.style.width = 100 / amount + '%'
                let control = document.createElement('span')
                dots.push(control)
                if(counter === this.selectedIndex) {
                    control.classList.add('selected')
                }
                control.innerText = counter
                control.addEventListener('click', (me) => {
                 this.selectedIndex = control.innerText
                })
                counter ++
                controls.appendChild(control)
            }
        })
        this.shadow.querySelector('.controls').appendChild(controls)
        fig.style.width = amount * 100 + '%';

        this.shadow.querySelector('.arrow-right').addEventListener('click', this._slide.bind(null,this, 1))
        this.shadow.querySelector('.arrow-left').addEventListener('click', ()=> {
            if(this.selectedIndex > 0){
                this.selectedIndex -=1
            }

        })
    }
    _slide(elem, i, ev) {
        console.log(this)
        if(this.selectedIndex < this._dots.length -1){
            this.selectedIndex +=i
        }
    }

    disconnectedCallback() {
        this.removeEventListener('keydown', this._onKeyDown);
        this.removeEventListener('click', this._onClick);
    }


    generateTemplate() {
        this.shadow.innerHTML = `
       <style>
      :host>div{padding:0 40px;position:relative;display:inline-block}:host>div .arrow-left{border-top:1px solid #afb1b2;border-left:1px solid #afb1b2;width:30px;height:30px;transform:rotate(-45deg);position:absolute;top:45%;left:0;cursor:pointer}:host>div .arrow-right{border-top:1px solid #afb1b2;border-right:1px solid #afb1b2;width:30px;height:30px;transform:rotate(45deg);position:absolute;top:45%;right:0;cursor:pointer}:host>div>div{overflow-x:hidden}:host>div>div figure{min-height:200px;background:grey;transition:.7s ease;position:relative;width:600%;margin:0;left:0;text-align:left;font-size:0;animation:25s slidy infinite}:host>div>div figure ::slotted(img){width:20%;float:left;cursor:pointer; height:400px;}:host>div>div figure ::slotted(img:hover){-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);transition:.4s;cursor:pointer}:host>div>div .controls{text-align:center}:host>div>div .controls span:hover{background: #9e0317;}:host>div>div .controls span{border-radius: 50%;width:.5rem;height:.5rem;padding:0;margin:1.5rem .375rem 0;background-color:#c8cacb;color:transparent;display:inline-block;cursor:pointer}:host>div>div .controls span.selected{background-color:#d5001c}
        </style>
        <div>
        <div>
            <figure>
                    <slot>
                        <img src="/static/img/pic-1.jpg" alt >
                        <img src="/static/img/pic-2.jpeg" alt >
                        <img src="/static/img/pic-3.jpeg" alt >
                        <img src="/static/img/pic-4.jpeg" alt >
                    </slot>
             </figure>
             <div class="controls"></div>
         </div>
        <div class="arrow-left"></div>
        <div class="arrow-right"></div>
        </div>
        `;
    }

}
/*
* custom element names require a dash so that the HTML parser registers the element as true custom element
 */
window.customElements.define('image-slider', ImageSlider);
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements