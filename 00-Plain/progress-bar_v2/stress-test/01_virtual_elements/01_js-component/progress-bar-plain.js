class ProgressBar {
    constructor(parentNode, complete) {
        this._complete = complete || 0;
        this._parentNode = parentNode;
        this.id = '00';

        this.bar = document.createElement('div');
        this.barInner = document.createElement('div');
        this.renderTemplate(this._complete)
    }

    get complete() {
        return this._complete;
    }

    set complete(val) {
        this._complete = val;

        this.barInner.style.width = this._complete + '%';
        this.barInner.textContent = this._complete + '%';
    }

    renderTemplate(complete) {
        this.bar.classList.add('progress-bar');
        this.barInner.classList.add('progress-bar-inner');
        this.barInner.textContent = complete + '%';

        this.bar.appendChild(this.barInner)
        this._parentNode.appendChild(this.bar)

        this.bar.setAttribute('style', `
         width: 100%;
                height: 30px;
                background-color: white;
                border-radius: 5px;
                box-shadow: 0 1px 3px black;
                color: #FFF;
        `);

        this.barInner.setAttribute('style', `
                height: 100%;
                line-height: 30px;
                background: linear-gradient(217deg, rgba(0,217,39,0.8), rgba(0,255,0,0) 70.71%),
                            linear-gradient(127deg, rgba(156,17,255,0.8), rgba(255,0,0,0) 70.71%),
                            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
                            background-size: 400% 400%;
                -webkit-animation: GradientProgressBar-${this.id} 1.6s ease infinite;
	            -moz-animation: GradientProgressBar-${this.id} 2s ease infinite;
                animation: GradientProgressBar-${this.id} 1.9s ease infinite;
                animation-iteration-count: 4;
                text-align: center;
                border-radius: 5px;
                transition: width 0.25s;
                max-width: 100%;
                width: ${complete}%;
        `);

        this.barInner.style.animationDelay = Math.random() + 's';

        // append global styling, keyframes cant be added to element
        ProgressBar.insertStyleSheetRule(
            `@keyframes GradientProgressBar-${this.id} {
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

}
