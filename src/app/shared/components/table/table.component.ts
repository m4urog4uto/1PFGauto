import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  anioDeCursada: string;
  debeMaterias: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  @Input()
  items: Alumno[] = [
    {
      id: 1,
      nombre: 'Perez',
      apellido: 'Gonzales',
      dni: '42132321',
      anioDeCursada: '5to',
      debeMaterias: 'si'
    }
  ];

  @Output()
  editStudent = new EventEmitter<string>();

  @Output()
  removeStudent = new EventEmitter<string>();

  dataSource = new MatTableDataSource(this.items);

  displayedColumns: string[] = ['dni', 'nombreCompleto', 'anioDeCursada', 'debeMaterias', 'acciones'];

  constructor() {}

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.items);
    console.log(changes);
  }

  editarAlumno(id: string): void {
    this.editStudent.emit(id);
  }
  
  eliminarAlumno(id: string): void {
    this.removeStudent.emit(id);
  }
}
