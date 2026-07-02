import { Component } from '@angular/core';
import { Button as ButtonComponent } from '../shared/button/button';
@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header { }
