class MarketBanner extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: "open"});

        this.shadow.innerHTML = this.generateTemplate(this.complete);

        this._selected = null;

    }

    connectedCallback() {
        const slot = this.shadow.querySelector('slot');
        const fig = this.shadow.querySelector('figure');
        const slotChildren = slot.assignedNodes()
        console.log(this.shadow)
        console.log(this.shadowRoot)
        console.log(slotChildren)

        let  amount = slotChildren.filter(c => c.nodeName === 'IMG').length;
        let counter = 0
        let controls = document.createElement('div')
        let controlArr = []
        slotChildren.forEach((child, i)=> {
            if(child.nodeName === 'IMG') {
                child.style.width = 100 / amount + '%'
                let control = document.createElement('span')
                controlArr.push(control)
                if(counter === 0) {
                    control.classList.add('selected')
                }
                control.innerText = counter
                control.addEventListener('click', () => {
                    fig.style.left = (-parseInt(control.innerText) * 100)  + '%';
                    if(this._selected) {
                        this._selected.classList.remove('selected')
                    } else {
                        controls.querySelector('span').classList.remove('selected')
                    }
                    control.classList.add('selected')
                    this._selected = control
                })
                counter ++
                controls.appendChild(control)
            }
        })
        this.shadow.querySelector('.controls').appendChild(controls)
        fig.style.width = amount * 100 + '%';

        this.shadow.querySelector('.arrow-right').addEventListener('click', ()=> {
            if(!(this._selected && parseInt(this._selected.innerHTML) === amount-1)) {
                if (this._selected) {
                    fig.style.left = (-(parseInt(this._selected.innerText) + 1) * 100) + '%';
                    this._selected.classList.remove('selected')
                    this._selected = controlArr[parseInt(this._selected.innerText) + 1]
                    this._selected.classList.add('selected')
                } else {
                    fig.style.left = (-(parseInt(controlArr[0].innerText) + 1) * 100) + '%';
                    controlArr[0].classList.remove('selected')
                    this._selected = controlArr[1]
                    this._selected.classList.add('selected')
                }
            }

        })
        this.shadow.querySelector('.arrow-left').addEventListener('click', ()=> {
            if(this._selected && parseInt(this._selected.innerHTML) > 0 ) {
                    fig.style.left = (-(parseInt(this._selected.innerText) - 1) * 100) + '%';
                    this._selected.classList.remove('selected')
                    this._selected = controlArr[parseInt(this._selected.innerText) - 1]
                    this._selected.classList.add('selected')
            }

        })
    }

    attributeChangedCallback(name, oldVal, newVal) {
        const innerBar = this.shadow.querySelector('.progress-bar-inner');
        switch (name) {
            case 'complete':
                this._complete = parseInt(newVal, 10) || 0;
                innerBar.style.width = this._complete + '%';
                innerBar.innerHTML = this._complete + '%';
        }
    }

    generateTemplate() {
        return `
       <style>
      :host>div{padding:0 40px;position:relative;display:inline-block}:host>div .arrow-left{border-top:1px solid #afb1b2;border-left:1px solid #afb1b2;width:30px;height:30px;transform:rotate(-45deg);position:absolute;top:45%;left:0;cursor:pointer}:host>div .arrow-right{border-top:1px solid #afb1b2;border-right:1px solid #afb1b2;width:30px;height:30px;transform:rotate(45deg);position:absolute;top:45%;right:0;cursor:pointer}:host>div>div{overflow:hidden}:host>div>div figure{min-height:100px;min-width:100%;background:grey;transition:.7s ease;position:relative;width:600%;margin:0;left:0;text-align:left;font-size:0;animation:25s slidy infinite}:host>div>div figure ::slotted(img){width:20%;float:left;cursor:pointer}:host>div>div figure ::slotted(img:hover){-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);transition:.4s;cursor:pointer}:host>div>div .controls{text-align:center}:host>div>div .controls span{width:.5rem;height:.5rem;padding:0;margin:1.5rem .375rem 0;background-color:#c8cacb;color:transparent;display:inline-block;cursor:pointer}:host>div>div .controls span.selected{background-color:#d5001c}
        </style>
        <div>
        <div>
            <figure>
                    <slot>
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" alt >
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/taj-mahal_copy.jpg" alt >
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ibiza.jpg" alt >
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/austin-fireworks.jpg" alt >
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
window.customElements.define('market-banner', MarketBanner);
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements