import { Component, signal } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { TicketInterface } from './tickets.model';
import { Title } from '@angular/platform-browser';
import { Ticket } from "./ticket/ticket";
@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets = signal<TicketInterface[]>([]);

  onAdd(data: { title: string, ticketText: string }) {
    const newDataTicket: TicketInterface = {
      id: Math.random().toString(),
      title: data.title,
      request: data.ticketText,
      status: 'open'
    }
    this.tickets.update((tickets) => [...tickets, newDataTicket])
  }

  onCloseTicket(id: string) {
    this.tickets.update((tikets) => tikets.map((tik) => { if (tik.id === id) return { ...tik, status: 'closed' }; return tik }));
  }
}
