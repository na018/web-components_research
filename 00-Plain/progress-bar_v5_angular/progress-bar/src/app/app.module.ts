import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progressBar/progressBar.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[ProgressBarComponent],
  // providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const progressBar = createCustomElement(ProgressBarComponent, { injector });
    customElements.define('progress-bar', progressBar);
  }

  ngDoBootstrap() {}
}
