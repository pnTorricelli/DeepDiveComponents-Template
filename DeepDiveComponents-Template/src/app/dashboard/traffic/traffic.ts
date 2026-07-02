import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-traffic',
  imports: [],
  templateUrl: './traffic.html',
  styleUrl: './traffic.css',
})
export class Traffic {
  dummyTrafficData = input<{ id: string, value: number }[]>();
  maxTraffic = computed<number>(() => Math.max(...this.dummyTrafficData()!.map((data) => data.value)));
}
