class ProgressBar {
    constructor(bar, complete) {
        console.time('constructor')
        this._complete = complete || 0;
        this._bar = bar || document.createElement('div');
        this._barInner = document.createElement('div');

        this.renderTemplate();
        console.timeEnd('constructor')
    }

    get complete() {
        return this._complete;
    }

    set complete(val) {
        console.time('set complete')
        this._complete = val;
        this._barInner.style.width = this._complete + '%';
        this._barInner.textContent = this._complete + '%';
        console.timeEnd('set complete')
    }
    get nodeElem() {
        return this._bar;
    }

    renderTemplate() {
        console.time('render template')
        this._barInner.classList.add('progress-bar-inner');
        this._barInner.textContent = this._complete + '%';
        this._barInner.style.width = this._complete + '%';
        this._barInner.style.animationDelay = Math.random() + 's';

        this._bar.classList.add('progress-bar');
        this._bar.appendChild(this._barInner)
        console.timeEnd('render template')
    }
}
