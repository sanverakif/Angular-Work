import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  name: string[] = ['ahmet', 'akif', 'ali'];
  name1 = [
    { a: 'uieueuie', aaa: 2 },
    { a: 'eiiueu', aaa: 4 },
  ];
  constructor() {}
  ngOnInit(): void {}
}
