import { Component, input, output, signal } from '@angular/core';
import { TicketInterface } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  data = input.required<TicketInterface>();
  detailsVisible = signal(false);
  closedTicket = output();


  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
  }

  onMarkAsCompleted() {
    this.closedTicket.emit();
  }


}
