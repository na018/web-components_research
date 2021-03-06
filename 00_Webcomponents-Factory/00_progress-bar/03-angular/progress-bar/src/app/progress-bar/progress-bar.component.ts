import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'progress-bar',
  styles: [`
    div {
      width: 100%;
      height: 30px;
      background-color: white;
      border-radius: 5px;
      box-shadow: 0 1px 3px black;
      color: #FFF;
    }
    div > div {
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
  `],
  template: `
    <div [attr.complete]="complete">
      <div [ngStyle]="{'width': complete+'%', 'animation-delay': randomAnimationDelay}">{{complete}}%</div>
    </div>
  `,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProgressBarComponent{
  @Input() complete = 0;
  randomAnimationDelay= Math.random() + 's';
}
