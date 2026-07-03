import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    '(click)': 'onClick()'
  }
})
export class Control {
  // @HostBinding('class') className = 'control'; versione utilie per linguaggio legacy
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  label = input.required<string>();
  private el = inject(ElementRef)//ElementRef ci da accesso rietto all elemento DOM

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
  }
}
