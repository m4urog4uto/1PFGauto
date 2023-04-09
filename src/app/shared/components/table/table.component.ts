import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  anioDeCursada: string;
  debeMaterias: boolean;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  alumnos: Alumno[] = [];

  dataSource = new MatTableDataSource(this.alumnos);

  displayedColumns: string[] = ['dni', 'nombreCompleto', 'anioDeCursada', 'debeMaterias'];
}
