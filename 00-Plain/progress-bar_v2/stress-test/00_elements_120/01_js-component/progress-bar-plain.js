let renderArr = []
let renderArrComponent = []
let renderArrSetter = []

class ProgressBar {
    constructor(parentNode, complete) {
        const start=window.performance.now()

        this._complete = complete || 0;
        this._parentNode = parentNode;
        this._bar = document.createElement('div')
        this._barInner = document.createElement('div');

        this.renderTemplate();

        renderArrComponent.push(window.performance.now()-start)
    }

    get complete() {
        return this._complete;
    }

    set complete(val) {
        const start=window.performance.now()

        this._complete = val;
        // this.renderTemplate(val) re-rendered leads to flickering
        this._barInner.style.width = this._complete + '%';
        this._barInner.textContent = this._complete + '%';

        renderArrSetter.push(window.performance.now()-start)
    }

    renderTemplate() {
        const start=window.performance.now()

        this._bar.classList.add('progress-bar');
        this._barInner.classList.add('progress-bar-inner');
        this._barInner.textContent = this._complete + '%';

        this._bar.appendChild(this._barInner)
        this._parentNode.appendChild(this._bar)

        this._bar.setAttribute('style', `
         width: 100%;
                height: 30px;
                background-color: white;
                border-radius: 5px;
                box-shadow: 0 1px 3px black;
                color: #FFF;
        `);

        this._barInner.setAttribute('style', `
                height: 100%;
                line-height: 30px;
                background: linear-gradient(217deg, rgba(0,217,39,0.8), rgba(0,255,0,0) 70.71%),
                            linear-gradient(127deg, rgba(156,17,255,0.8), rgba(255,0,0,0) 70.71%),
                            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
                            background-size: 400% 400%;
                -webkit-animation: GradientProgressBar-${this._id} 1.6s ease infinite;
	            -moz-animation: GradientProgressBar-${this._id} 2s ease infinite;
                animation: GradientProgressBar-${this._id} 1.9s ease infinite;
                animation-iteration-count: 4;
                text-align: center;
                border-radius: 5px;
                transition: width 0.25s;
                max-width: 100%;
                width: ${this._complete}%;
        `);

        this._barInner.style.animationDelay = Math.random() + 's';

        // append global styling, keyframes cant be added to element
        ProgressBar.insertStyleSheetRule(
            `@keyframes GradientProgressBar-${this._id} {
                    0% {
                        background-position: 0% 50%
                     }
                    50% {
                        background-position: 100% 50%
                     }
                    100% {
                         background-position: 0% 50%
                     }
             }`
        )
        renderArr.push(window.performance.now()-start)
    }

    static insertStyleSheetRule(ruleText) {
        let sheets = document.styleSheets;

        if (sheets.length === 0) {
            let style = document.createElement('style');
            style.appendChild(document.createTextNode(""));
            document.head.appendChild(style);
        }

        let sheet = sheets[sheets.length - 1];
        sheet.insertRule(ruleText, sheet.rules ? sheet.rules.length : sheet.cssRules.length)
    }
    static get performance () {
        return {
            renderTemplate: {
                '0_array': renderArr,
                '1_sort': renderArr.sort(),
                '2_quantile': {
                    l:renderArr.sort()[Math.round((renderArr.length - 1)*0.25)].toFixed(3),
                    r:renderArr.sort()[Math.round((renderArr.length - 1)*0.75)+1].toFixed(3),
                },
                '4_min': Math.min(...renderArr).toFixed(3),
                '5_max': Math.max(...renderArr).toFixed(3),
                '6_mean': (renderArr.reduce((a,b) => a+b)/(renderArr.length-1)).toFixed(3),
                '7_sum': renderArr.reduce((a,b) => a+b).toFixed(3),
            },
            renderComponent: {
                '0_array': renderArrComponent,
                '1_sort': renderArrComponent.sort(),
                '2_quantile': {
                    l:renderArrComponent.sort()[Math.round((renderArrComponent.length - 1)*0.25)].toFixed(3),
                    r:renderArrComponent.sort()[Math.round((renderArrComponent.length - 1)*0.75)+1].toFixed(3),
                },
                '4_min': Math.min(...renderArrComponent).toFixed(3),
                '5_max': Math.max(...renderArrComponent).toFixed(3),
                '6_mean': (renderArrComponent.reduce((a,b) => a+b)/(renderArrComponent.length-1)).toFixed(3),
                '7_sum': renderArrComponent.reduce((a,b) => a+b).toFixed(3),
            },
            setWidth: renderArrSetter.length > 0 ? {
                '0_array': renderArrSetter,
                '1_sort': renderArrSetter.sort(),
                '2_quantile': {
                    l:renderArrSetter.sort()[Math.round((renderArrSetter.length - 1)*0.25)].toFixed(3),
                    r:renderArrSetter.sort()[Math.round((renderArrSetter.length - 1)*0.75)+1].toFixed(3),
                },
                '4_min': Math.min(...renderArrSetter).toFixed(3),
                '5_max': Math.max(...renderArrSetter).toFixed(3),
                '6_mean': (renderArrSetter.reduce((a,b) => a+b)/(renderArrSetter.length-1)).toFixed(3),
                '7_sum': renderArrSetter.reduce((a,b) => a+b).toFixed(3),
            }: {},
        }
    }
}
