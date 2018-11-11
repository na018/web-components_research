class ProgressBar {
    constructor(parentNode, complete) {
        console.time('constructor')
        let constructorRenderingStart = window.performance.now()
        this._complete = complete || 0;
        this._parentNode = parentNode;
        this.renderTemplate(this._complete);
        this.progressBarInner = parentNode.querySelector('.progress-bar-inner');
        let constructorRenderingEnd = window.performance.now()
        console.log('Rendering of constuctor: ' + (constructorRenderingEnd - constructorRenderingStart).toFixed(2))
        console.timeEnd('constructor')
    }

    get complete() {
        return this._complete;
    }

    set complete(val) {
        console.time('set complete')
        this._complete = val;
        // this.renderTemplate(val) re-rendered leads to flickering
        this.progressBarInner.style.width = this._complete + '%';
        this.progressBarInner.innerHTML = this._complete + '%';
        console.timeEnd('set complete')
    }

    renderTemplate(complete) {
        console.time('render template')
        this._parentNode.innerHTML = `
        <div class="progress-bar">
            <div class="progress-bar-inner" style="width: ${complete}%">${complete}%</div>
        </div
        `;
        console.timeEnd('render template')
    }
}
