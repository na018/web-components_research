class ProgressBar extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: "open"});
        this._id = '00'
        this._complete = 0;
        this._barInner = document.createElement('div')
    }
    connectedCallback() {this.generateTemplate()}

    get complete() {
        return this._complete;
    }

    set complete(val) {
        this._complete = val;
        this.setAttribute('complete', val); // reflect attribute (optional)
    }

    static get observedAttributes() {
        return ['complete'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'complete':
                if(oldVal !== newVal) {
                    this._complete = parseInt(newVal, 10) || 0;
                    this._barInner.style.width = this._complete + '%';
                    this._barInner.textContent = this._complete + '%';
                }
        }
    }

    generateTemplate() {
        this.classList.add('progress-bar');
        //this._barInner.classList.add('progress-bar-inner');

        this.style.width = '100%';
        this.style.height = '30px';
        this.style.backgroundColor = 'white';
        this.style.borderRadius = '5px';
        this.style.boxShadow = '0 1px 3px black';
        this.style.color = '#FFF';
        this.style.display = 'block';

        this._barInner.textContent = this._complete + '%';
        this._barInner.style.height = "100%";
        this._barInner.style.lineHeight = "30px";
        this._barInner.style.background = "linear-gradient(217deg, rgba(0,217,39,0.8), rgba(0,255,0,0) 70.71%), linear-gradient(127deg, rgba(156,17,255,0.8), rgba(255,0,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)";
        this._barInner.style.backgroundSize = "400% 400%";
        this._barInner.style.webkitAnimation = "GradientProgressBar 1.9s ease infinite";
        this._barInner.style.animation = `GradientProgressBar-${this._id} 1.9s ease infinite`;
        this._barInner.style.animationIterationCount = "2";
        this._barInner.style.animationDelay = Math.random() +"s";
        this._barInner.style.textAlign = "center";
        this._barInner.style.borderRadius = "5px";
        this._barInner.style.transition = "width 0.25s";
        this._barInner.style.maxWidth = "100%";
        this._barInner.style.width = this._complete + "%";

        const style = document.createElement('style')
        style.textContent = `
         @keyframes GradientProgressBar-${this._id} {
	            0% {
		            background-position: 0% 50%
            	}
               	50% {
	            	background-position: 100% 50%
            	}
	            100% {
	            	background-position: 0% 50%
	            }
	        }
	        `
        this.shadowRoot.appendChild(style)
        this.shadowRoot.appendChild(this._barInner)
       // this.shadow.appendChild(this._style)
    }

}

/*
* custom element names require a dash so that the HTML parser registers the element as true custom element
 */
window.customElements.define('progress-bar', ProgressBar);
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements