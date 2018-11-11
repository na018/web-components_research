<p align="center">
<img src="webcomponent.png" alt="Web Component">
</p>

# Innovation Project on Web Components

This project analyzes web components in terms of performance, programming convenience, best practices and conventions.
The research project is supervised by Prof. Dr. Joachim Charzinski at the [Stuttgart Media University](https://www.hdm-stuttgart.de/).

## Current Status
2018-11-11:
* A Progress Bar was created as a simple example
    * three components where created:
        * one with global styling (normal JavaScript ES6 Syntax)
        * one with component styling (style comes with the component)
        * a web component according to web component standards
    * stress test of the three components:
        * with 120 elements rendered in the HTML body
        * with a virtual DOM which can be modified via a variable (currently set to 1200)
    * there have been created three different versions of the progress-bar playing around with JS Syntax and performance
* Investigations of Polymer
    * Creation of the progress bar example as a polymer component
* performance analyzes are still ongoing
    * experiments have been made with `console.time()` and `window.performance.now()` in combination with a `ProgressBar.performance()` function
    * furthermore the performance tool from the chrome inspector was analyzed


### Examples

```js
// Performance function
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
```


## Built With

* [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript) - ES6 Syntax (2015)
* [WebComponents](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
* [Polymer](https://www.polymer-project.org/3.0/start/)

## Authors

* **Nadin-Katrin Apel**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc