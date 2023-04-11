import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';

export interface Alumno {
  id: number;
  name: string;
  surname: string;
  dni: string;
  email: string;
  phone: string;
  courseSelected: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  @Input()
  items: Alumno[] = [];

  @Output()
  editStudent = new EventEmitter<number>();

  @Output()
  removeStudent = new EventEmitter<number>();

  dataSource = new MatTableDataSource(this.items);

  displayedColumns: string[] = ['dni', 'fullName', 'email', 'phone', 'courseSelected', 'actions'];

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.items);
  }

  editarAlumno(id: number): void {
    this.editStudent.emit(id);
  }
  
  eliminarAlumno(id: number): void {
    this.removeStudent.emit(id);
  }
}