import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Peter Test (Angular)';
  times: number;
  colorName: string;
  testLine = 'Look Peter the component works';
  output = [];

  constructor() { }

  ngOnInit() {
    this.times = 1;
    this.colorName = 'black';
    this.output.push(this.testLine);
  }

  updateTest() {
    this.output = [];
    for(let i = 0; i < this.times; i++) {
      this.output.push(this.testLine);
    }
  }
}