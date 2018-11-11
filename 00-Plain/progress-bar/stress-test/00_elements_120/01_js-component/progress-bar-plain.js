let renderArr = []
let renderArrComponent = []
let renderArrSetter = []

class ProgressBar {
    constructor(parentNode, complete) {
        const start=window.performance.now()

        this._complete = complete || 0;
        this._parentNode = parentNode;
        this.renderTemplate(this._complete);
        this.progressBarInner = parentNode.querySelector('.progress-bar-inner');

        renderArrComponent.push(window.performance.now()-start)
    }

    get complete() {
        return this._complete;
    }

    set complete(val) {
        const start=window.performance.now()

        this._complete = val;
        // this.renderTemplate(val) re-rendered leads to flickering
        this.progressBarInner.style.width = this._complete + '%';
        this.progressBarInner.innerHTML = this._complete + '%';

        renderArrSetter.push(window.performance.now()-start)
    }

    renderTemplate(complete) {
        const start=window.performance.now()

        this._parentNode.innerHTML = `
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
            <div class="progress-bar-inner" style="width: ${complete}%; animation-delay: ${Math.random()}s;">${complete}%</div>
        </div
        `;
        renderArr.push(window.performance.now()-start)
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
