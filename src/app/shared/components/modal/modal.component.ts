import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  usuario: {
    nombre: string;
    apellido: string;
  }
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
}
