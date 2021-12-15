import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-one',
  templateUrl: './layout-one.component.html',
  styleUrls: ['./layout-one.component.scss'],
})
export class LayoutOneComponent implements OnInit {
  @Input() cards: any;
  @Input() columns: number;

  constructor() {}

  ngOnInit(): void {}

  calculateColumns(): string {
    return `col-lg-${12 / this.columns}`;
  }
}
