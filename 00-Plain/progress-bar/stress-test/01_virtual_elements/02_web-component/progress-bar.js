class ProgressBar extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: "closed"});
        this._complete = 0;

        this.shadow.innerHTML = this.generateTemplate(this.complete);
    }

    get complete() {
        return this._complete;
    }

    set complete(val) {
        this._complete = val;
        this.setAttribute('complete', val);
    }

    static get observedAttributes() {
        return ['complete'];
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

    generateTemplate(complete) {
        return `
        <style>
            .progress-bar {
                width: 100%;
                height: 30px;
                background-color: white;
                border-radius: 5px;
                box-shadow: 0 1px 3px black;
                color: #FFF;
            }
            .progress-bar-inner {
                height: 100%;
                line-height: 30px;
                background: linear-gradient(217deg, rgba(0,217,39,0.8), rgba(0,255,0,0) 70.71%),
                            linear-gradient(127deg, rgba(156,17,255,0.8), rgba(255,0,0,0) 70.71%),
                            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
                            background-size: 400% 400%;
                -webkit-animation: Gradient 1.6s ease infinite;
	            -moz-animation: Gradient 2s ease infinite;
                animation: Gradient 1.9s ease infinite;
                animation-iteration-count: 2;
                animation-delay: ${Math.random()}s;
                text-align: center;
                border-radius: 5px;
                transition: width 0.25s;
                max-width: 100%;
            }
            @keyframes Gradient {
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
        </style>
        <div class="progress-bar">
            <div class="progress-bar-inner" style="width: ${complete}%">${complete}%</div>
        </div
        `;
    }

}

/*
* custom element names require a dash so that the HTML parser registers the element as true custom element
 */
window.customElements.define('progress-bar', ProgressBar);
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements