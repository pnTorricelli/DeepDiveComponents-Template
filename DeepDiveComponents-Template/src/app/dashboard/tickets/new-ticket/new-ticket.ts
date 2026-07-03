import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Button as ButtonComponent } from "../../../shared/button/button";
import { Control } from '../../../shared/control/control'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit(enterTitle: HTMLInputElement, enterRequest: HTMLTextAreaElement) {
    console.log("Submit" + enterTitle.value + enterRequest.value)
    this.form().nativeElement.reset();
  }
}
