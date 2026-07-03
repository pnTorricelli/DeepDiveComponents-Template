import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {
  currentStatus = signal<"online" | "offline" | "unkown">('online');


  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5)
        this.currentStatus.set("online");
      else if (rnd < 0.9)
        this.currentStatus.set("offline");
      else
        this.currentStatus.set("unkown")

    }, 5000)
  }
}
