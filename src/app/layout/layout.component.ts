import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  columns: number = 4;

  cards: any = [
    { title: 'Proveer', quantity: 363, icon: 'fa-user' },
    { title: 'Proveer devuelto', quantity: 15, icon: 'fa-circle' },
    { title: 'Firmar', quantity: 8, icon: 'fa-home' },
    { title: 'Firmar tramitar', quantity: 50, icon: 'fa-apple-alt' },
    { title: 'Sentencia devuelta', quantity: 57, icon: 'fa-archive' },
    { title: 'Crear tarea', quantity: 22, icon: 'fa-at' },
    { title: 'Generar sentencia', quantity: 9, icon: 'fa-award' },
    { title: 'Generar medida cautelar', quantity: 8, icon: 'fa-bahai' },
    { title: 'Firmar sentencia', quantity: 8, icon: 'fa-baseball-bat' },
    { title: 'Firmar medida cautelar', quantity: 8, icon: 'fa-bath' },
    { title: 'Resolver competencia', quantity: 8, icon: 'fa-bomb' },
  ];

  constructor() {}

  ngOnInit(): void { }

  calculateColumns(): string {
    return `col-lg-${12 / this.columns}`;
  }
}
