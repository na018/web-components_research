class HelloWorld extends HTMLElement {
    constructor() {
        super()
        this._text = 'Hello World'
        this.shadow = this.attachShadow({mode: "open"})
        this.shadow.innerHTML = this.generateTemplate()

        
    }

    connectedCallback() {
        // invoked when appended to or moved in DOM
        // before element's contents fully parsed
        // using slots ? const slotChildren = this.shadow.querySelector('slot').assignedNodes()
    }

    disconnectedCallback() {
        // invoked when disconnected from DOM
    }

    adoptedCallback() {
        // called when moved to new document
    }

    get text() {
        return this._text;
    }

    set text(val) {
        this._text = val;
        this.setAttribute('text', val);
    }

    static get observedAttributes() {
        return ['text'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        // called on attribute change, removal, add
        const p = this.shadow.querySelector('p')
        switch (name) {
            case 'text':
                this._text = newVal;
                p.innerText = newVal;
        }
    }

    generateTemplate() {
        return `
            <style>
            @import url('https://fonts.googleapis.com/css?family=Black+And+White+Picture|Unlock');
            p {
               font-family: 'Unlock', cursive;
               color: blue;
            }
            </style>
            <p>${this._text}</p>
        `;
    }
}

window.customElements.define('hello-world', HelloWorld);