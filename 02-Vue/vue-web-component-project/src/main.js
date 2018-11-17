import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import VueWebComponent from './components/VueWebComponent';
import ProgressBar from './components/ProgressBar';

const CustomElementP = wrap(Vue, ProgressBar);
const CustomElement = wrap(Vue, VueWebComponent);
//const CustomElementProgressBar = wrap(Vue, ProgressBar);

window.customElements.define('progress-bar', CustomElementP);
window.customElements.define('my-custom-element', CustomElement);

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
