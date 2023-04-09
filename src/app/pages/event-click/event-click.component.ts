import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-click',
  templateUrl: './event-click.component.html',
  styleUrls: ['./event-click.component.css'],
})
export class EventClickComponent {
  count: number = 2;
  constructor() {}

  ngOnInit(): void {}

  WriteToConsole() {
      console.log("click");
  }
 SayaciArttir() {
    this.count++;
  }
}
