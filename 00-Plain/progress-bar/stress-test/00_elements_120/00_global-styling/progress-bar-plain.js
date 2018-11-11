class ProgressBar {
    constructor(parentNode, complete) {
        this._complete = complete || 0;
       // this._complete = this._complete > 100 ? 100 : this._complete;
        this._parentNode = parentNode;
        this.renderTemplate(this._complete);
        this.progressBarInner = parentNode.querySelector('.progress-bar-inner');
    }

    get complete() {
        return this._complete;
    }

    set complete(val) {
        this._complete = val;
        this.progressBarInner.style.width = this._complete + '%';
        this.progressBarInner.innerHTML = this._complete + '%';
    }

    renderTemplate(complete) {
        this._parentNode.innerHTML = `
        <div class="progress-bar">
            <div class="progress-bar-inner 2" style="width: ${complete}%;  animation-delay: ${Math.random()}s;">${complete}%</div>
        </div
        `;
    }
}
