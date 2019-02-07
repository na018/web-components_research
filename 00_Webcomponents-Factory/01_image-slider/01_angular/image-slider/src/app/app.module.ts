import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ImageSliderComponent],
//  providers: [],
// bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const ImageSlider = createCustomElement(ImageSliderComponent, { injector: this.injector });
    customElements.define('image-slider', ImageSlider);
  }
}
