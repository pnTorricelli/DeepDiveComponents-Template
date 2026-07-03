import { AfterContentInit, afterEveryRender, afterNextRender, Component, contentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
export class Control implements AfterContentInit {
  // @HostBinding('class') className = 'control'; versione utilie per linguaggio legacy
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  constructor() {
    afterEveryRender(() =>
      console.log('afterRender')
    );

    afterNextRender(() =>
      console.log('afterNextRender'));
  }


  label = input.required<string>();
  private el = inject(ElementRef)//ElementRef ci da accesso diretto all' elemento DOM
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
  ngAfterContentInit() {

  }
}
