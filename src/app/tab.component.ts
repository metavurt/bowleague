import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div class="wrapper unselectable" [ngClass]="{ active: active }">
      <ng-content></ng-content>
      
    </div>
  `,
  styles: [`
    :host {
      cursor: pointer;
      user-select: none;
    }
    .active {
      background-color: rgba(242,125,12,1);
    }
    .unselectable {
      padding: 1rem;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
  `]
})
export class TabComponent {
  @Input() active: boolean = false;
}

