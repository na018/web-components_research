class ProgressBar {
    constructor(parentNode, complete) {
        this._complete = complete || 0;
        this._parentNode = parentNode;
        this._bar = document.createElement('div');
        this._barInner = document.createElement('div');

        this.renderTemplate();
    }

    get complete() {
        return this._complete;
    }

    set complete(val) {
        this._complete = val;
        this._barInner.style.width = this._complete + '%';
        this._barInner.textContent = this._complete + '%';
    }

    renderTemplate() {
        this._barInner.classList.add('progress-bar-inner');
        this._barInner.textContent = this._complete + '%';
        this._barInner.style.width = this._complete + '%';
        this._barInner.style.animationDelay = Math.random() + 's';

        this._bar.classList.add('progress-bar');
        this._bar.appendChild(this._barInner)
        this._parentNode.appendChild(this._bar)
    }
}
