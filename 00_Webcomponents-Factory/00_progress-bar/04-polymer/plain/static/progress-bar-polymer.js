import {html, PolymerElement} from '../node_modules/@polymer/polymer/polymer-element.js';

/**
 * `progress-bar-polymer`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ProgressBarPolymer extends PolymerElement {
  constructor() {
    super();
    this.animationDelay = Math.random()
  }
  static get template() {
    return html`
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
            <div class="progress-bar-inner" style="width: [[complete]]%;  animation-delay: {{animationDelay}}s">[[complete]]</div>
        </div>
    `;
  }
  static get properties() {
    return {
        complete: {
            type: Number,
            value: 0,
            /* notify: true,
             reflectToAttribute: true*/
        },
    };
  }
}

window.customElements.define('progress-bar', ProgressBarPolymer);
