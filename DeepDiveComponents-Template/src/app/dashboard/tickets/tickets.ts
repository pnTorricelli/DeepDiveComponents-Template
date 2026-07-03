import { Component, signal } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { TicketInterface } from './tickets.model';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-tickets',
  imports: [NewTicket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets = signal<TicketInterface[]>([]);

  onAdd(data: { title: string, ticketText: string }) {
    const newDataTicket: TicketInterface = {
      id: (this.tickets().length + 1).toString(),
      title: data.title,
      request: data.ticketText,
      status: 'open'
    }
    this.tickets.update((tickets) => [...tickets, newDataTicket])
  }

}
