import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';


@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitaComponent implements OnInit {


  opcionesAvanzadas = false;

forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('Carlos', Validators.required),
      'opcionesAvanzadas': new FormControl()
    });
   }

  ngOnInit() {
  }
  guardar() {
    console.log(this.forma);
  }
}
