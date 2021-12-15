import { NumberFormatStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-three',
  templateUrl: './layout-three.component.html',
  styleUrls: ['./layout-three.component.scss'],
})
export class LayoutThreeComponent implements OnInit {
  @Input() cards: any;
  @Input() columns: number;

  constructor() {}

  ngOnInit(): void {}

  calculateColumns(): string {
    return `col-lg-${12 / this.columns}`;
  }
}
