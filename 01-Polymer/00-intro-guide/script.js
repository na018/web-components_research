import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-input/iron-input.js';
// Define the class for a new element called custom-element
class DomElement extends PolymerElement {
    constructor() {
        super();
        this.owner = 'Nadin';
        this.number = Math.round(Math.random()*10) + "" + Math.round(Math.random()*10)
        this.employees = [
            {first: 'Bob', last: 'Li'},
            {first: 'Ayesha', last: 'Johnson'},
            {first: 'Fatma', last: 'Kumari'},
            {first: 'Tony', last: 'Mori'}
        ];
    }
    static get properties () {
        return {
            // Configure owner property
            age: {
                type: Number,
                value: 12,
            },
            myName: {
                type: String,
                value: 'Nadin'
            }
        };
    }
    ready() {super.ready()}
    static get template() {
        return html`
          <!-- scoped CSS for this element -->
    <style>
      div {
        display: inline-block;
        background-color: #ccc;
        border-radius: 8px;
        padding: 4px;
      }
    </style>
<h1> Employee list: </h1>
    <ul>
    <template is="dom-repeat" items="{{employees}}">
        <li>First name: <span>{{item.first}}</span>; Last name: <span>{{item.last}}</span></li>
    </template>
    </ul>
    <div>
    <p>Hi [[myName]]!</p>
      <p>This is <b>{{owner}}</b>'s name-tag element.</p>
      <p>She is <b>[[age]]</b> years old.</p>
      <p>{{number}} is your lucky number today</p>
      <!-- iron-input exposes a two-way bindable input value -->
      <iron-input bind-value="{{myName}}">
        [[myName]]
      <input is="iron-input" placeholder="Your name here...">
      </iron-input>
      <slot></slot>
    </div>
        `
    }
}
// Register the new element with the browser
customElements.define('custom-element', DomElement);