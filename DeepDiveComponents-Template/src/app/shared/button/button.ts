import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  button = input.required<{ title: string, icon: string }>()
}
