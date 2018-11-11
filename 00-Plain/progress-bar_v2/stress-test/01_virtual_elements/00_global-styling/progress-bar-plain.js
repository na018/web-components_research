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

        this.barInner.style.width = val + '%';
        this.barInner.textContent = this._complete + '%';
    }

    renderTemplate(complete) {
        this.bar.classList.add('progress-bar');
        this.barInner.classList.add('progress-bar-inner');
        this.barInner.style.animationDelay = Math.random() + 's';
        this.barInner.style.width = complete + '%';
        this.barInner.textContent = complete + '%';

        this.bar.appendChild(this.barInner);
        this._parentNode.appendChild(this.bar);
    }
}
