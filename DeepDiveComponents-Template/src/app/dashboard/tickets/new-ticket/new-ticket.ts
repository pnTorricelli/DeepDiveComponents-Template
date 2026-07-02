import { Component } from '@angular/core';
import { Button as ButtonComponent } from "../../../shared/button/button";

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket { }
