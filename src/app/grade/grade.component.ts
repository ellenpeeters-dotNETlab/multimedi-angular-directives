import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  public grade: number = _.random(1, 10);

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.grade = _.random(1, 10);
    }, 2000);
  }
}
