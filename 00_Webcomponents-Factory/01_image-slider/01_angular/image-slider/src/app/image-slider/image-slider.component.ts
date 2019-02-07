import {
  AfterContentChecked,
  Component, ViewChild,
  ElementRef, EventEmitter,
  Input, Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'image-slider',
  template: `
    <div>
      <div>
        <figure #imageContainer
                [style.width]="(slides.length+1)*100 + '%'"
                [style.left]="-_sI*100+'%'"
        >
          <ng-content></ng-content>
        </figure>
        <div class="controls">
          <span *ngFor="let slide of slides; let i = index;" [class.selected]="i===_sI"
                (click)="changeSlide(i)">{{i}}</span>
        </div>
      </div>
      <div class="arrow-left" (click)="slide(-1)"></div>
      <div class="arrow-right" (click)="slide(1)"></div>
    </div>
  `,
  styles: [`:host>div{padding:0 40px;position:relative;display:inline-block}:host>div .arrow-left{border-top:1px solid #afb1b2;border-left:1px solid #afb1b2;width:30px;height:30px;transform:rotate(-45deg);position:absolute;top:45%;left:0;cursor:pointer}:host>div .arrow-right{border-top:1px solid #afb1b2;border-right:1px solid #afb1b2;width:30px;height:30px;transform:rotate(45deg);position:absolute;top:45%;right:0;cursor:pointer}:host>div>div{overflow-x:hidden}:host>div>div figure{min-height:200px;background:grey;transition:.7s ease;position:relative;width:600%;margin:0;left:0;text-align:left;font-size:0;animation:25s slidy infinite}:host>div>div figure ::slotted(img){width:20%;float:left;cursor:pointer; height:400px;}:host>div>div figure ::slotted(img:hover){-webkit-transform:scale(1.03);-ms-transform:scale(1.03);transform:scale(1.03);transition:.4s;cursor:pointer}:host>div>div .controls{text-align:center}:host>div>div .controls span:hover{background: #9e0317;}:host>div>div .controls span{border-radius: 50%;width:.5rem;height:.5rem;padding:0;margin:1.5rem .375rem 0;background-color:#c8cacb;color:transparent;display:inline-block;cursor:pointer}:host>div>div .controls span.selected{background-color:#d5001c}`],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ImageSliderComponent implements AfterContentChecked {
  @ViewChild('imageContainer') figure: ElementRef;
  @Input()
  set selectedindex(val:  string) {
    this._sI = parseInt(val);
  }
  @Output() updateSelectedIndex = new EventEmitter<number>();

  slides =  [];
  _sI = 0;

  ngAfterContentChecked(): void {
    this.slides = this.figure.nativeElement.children
    for(let i=0; i< this.slides.length; i++) {
      const slide= this.slides[i];
      slide.style.height = '400px';
      slide.style.width = 100 / (this.slides.length+1) + '%';
      slide.style.cursor = 'pointer';
    }
  }

  changeSlide(i: number) {
    this.updateSelectedIndex.emit(i)
  }

  slide(i: number) {
    if(i<0 && this._sI>0 || i>0 && this._sI<this.slides.length-1){
      this.updateSelectedIndex.emit(this._sI+i)
    }
  }
}
