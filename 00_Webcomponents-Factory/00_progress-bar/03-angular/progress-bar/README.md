# Progress-Bar

## How to create a web component with Angular 6
1) create project with angular cli:
  - ng new progress-bar && cd progress-bar
  - ng add @angular/elements
  - npm i document-register-element@>=1.8.1
2) configure progress-bar/tsconfig.json
  -  change target to "target": "es2015", to prevent errors when building project
3) create web component
  - ng g component progress-bar --inline-style --inline-template -v Native
  - configure events, @Input and @Output etc.
4) test web component in app.component.html
  - put selector `<progress-bar></progress-bar>` in app template
  - test via ng serve
5) tell app.module.ts about your new component
  - in @NgModule put it as entryComponent `entryComponents:[ProgressBarComponent],`
  - define custom element in App constructor
  ````javascript
  export class AppModule {
    constructor(private injector: Injector) {
      const progressBar = createCustomElement(ProgressBarComponent, { injector });
      customElements.define('progress-bar', progressBar);
    }
    ngDoBootstrap() {}
  }
  ````
6) create build script in package.json
```json   
       "build": "ng build --prod --output-hashing=none",
       "package": "cat dist/progress-bar/{runtime,polyfills,scripts,main}.js | gzip > progress-bar.js.gz",
       "serve": "node dist/progress-bar/server.js",
```
7) run npm build && npm serve

> [medium ref](https://medium.freecodecamp.org/how-to-create-angular-6-custom-elements-web-components-c88814dc6e0a)
  



----------------------------
---------------------------




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
