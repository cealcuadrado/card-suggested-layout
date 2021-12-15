import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout-two',
  templateUrl: './layout-two.component.html',
  styleUrls: ['./layout-two.component.scss'],
})
export class LayoutTwoComponent implements OnInit {
  @Input() cards: any;
  @Input() columns: number;

  constructor() {}

  ngOnInit(): void {}

  calculateColumns(): string {
    return `col-lg-${12 / this.columns}`;
  }
}
