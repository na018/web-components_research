let renderArr = []
let renderArrComponent = []
let renderArrSetter = []

class ProgressBar {
    constructor(parentNode, complete) {
        // const start=window.performance.now()

        this._complete = complete || 0;
        this._parentNode = parentNode;
        this._bar = document.createElement('div');
        this._barInner = document.createElement('div');

        this.renderTemplate();

        // renderArrComponent.push(window.performance.now()-start)
    }

    get complete() {
        return this._complete;
    }

    set complete(val) {
       // const start=window.performance.now()

        this._complete = val;
        this._barInner.style.width = this._complete + '%';
        this._barInner.textContent = this._complete + '%';

        // renderArrSetter.push(window.performance.now()-start)
    }

    renderTemplate() {
       // const start=window.performance.now()

        this._barInner.classList.add('progress-bar-inner');
        this._barInner.textContent = this._complete + '%';
        this._barInner.style.width = this._complete + '%';
        this._barInner.style.animationDelay = Math.random() + 's';

        this._bar.classList.add('progress-bar');
        this._bar.appendChild(this._barInner)
        this._parentNode.appendChild(this._bar)
        // renderArr.push(window.performance.now()-start)
    }
   /* static get performance () {
        let p = {
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
        return {
            component: {
                max: p.renderComponent["5_max"],
                min: p.renderComponent["4_min"],
                mean: p.renderComponent["6_mean"],
                sum: p.renderComponent["7_sum"],
                ql: p.renderComponent["2_quantile"][0],
                qr: p.renderComponent["2_quantile"][1],
            },
            template: {
                max: p.renderTemplate["5_max"],
                min: p.renderTemplate["4_min"],
                mean: p.renderTemplate["6_mean"],
                sum: p.renderTemplate["7_sum"],
                ql: p.renderTemplate["2_quantile"][0],
                qr: p.renderTemplate["2_quantile"][1],
            },
            attrChange: {
                max: p.setWidth["5_max"],
                min: p.setWidth["4_min"],
                mean: p.setWidth["6_mean"],
                sum: p.setWidth["7_sum"],
                ql: p.setWidth["2_quantile"][0],
                qr: p.setWidth["2_quantile"][1],
            }
        }
    }*/
}