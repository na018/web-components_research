import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

// Define the element's API using an ES2015 class
class XCustom extends PolymerElement {

    // Define optional shadow DOM template
    static get template() {
        return html`
     <style>
       /* CSS rules for your element */
      :host {
        display: inline-block;
      }
      :host([clicked]) p {
        background: red;
      }
      div { color: red; }
     </style>
       <!-- shadow DOM for your element -->
     <div>[[greeting]]</div> <!-- data bindings in shadow DOM -->
     <p>[[clicked]]</p>
   `;
    }

    // Declare properties for the element's public API
    static get properties() {
        return {
            greeting: {
                type: String
            },
            clicked: {
                type: Boolean,
                value: false,
                notify: true,                          // notify host element on change
                reflectToAttribute: true               // synchronize with corresponding HTML attribute
            },
        }
    }

    constructor() {
        super();
        this.greeting = 'Hello!';
        this.addEventListener('click', this.clicked.bind(this));
    }

    // Add methods to the element's public API
    greetMe() {
        console.log(this.greeting);
    }
    /**
     * Define callback function for the event listener
     */
    clicked() {
        this.clicked = !this.clicked;
    }

}

// Register the x-custom element with the browser
customElements.define('x-custom', XCustom);