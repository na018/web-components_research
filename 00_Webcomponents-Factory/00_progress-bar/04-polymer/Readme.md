# Polymer Webcomponent
1) Setup
## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

- `yarn init`
- package.json: `"flat": true
```
{
  "name": "my-app",
  "flat": true,
  ...
}
```
- install Polymer and Web components
```
yarn add @polymer/polymer@next
yarn add @webcomponents/webcomponentsjs
```
- in `index.html`
```html
<!-- Load polyfills-->
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
<!-- import progress-bar-polymer module -->
<script type="module" src="static/progress-bar-polymer.js"></script>
```
- in `static/progress-bar-polymer.js` import and use PolymerElement:
```javscript
import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';
```
## Viewing Your Element

- serve files: navigate into 04-polymer project folder via terminal and run:
```
polymer serve
```
- open browser window on suggested port e.g. `http://127.0.0.1:8080/`


---

2) Progress-Bar

## About Polymer 3.0
Polymer is a library which helps to create custom elements and in particular web components.
More information can be found in the [Polymer Documentation](https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview).
```javascript
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

```

