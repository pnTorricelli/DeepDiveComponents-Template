import { Component } from '@angular/core';
import { Button as ButtonComponent } from "../../../shared/button/button";
import { Control } from '../../../shared/control/control'

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, Control],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket { }
