import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { RegistrarseService } from '../../../services/registrarse.service';
import { Afiliado } from '../../../models/afiliado';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  afiliado: Afiliado = {
    Nombre: '',
    Apellido: '',
    Cedula: '',
    Correo: '',
    Contrasena: '',
    Celular: ''

  };

  formulario: FormGroup;

  constructor(private _registrarseService: RegistrarseService) {

    this.formulario = new FormGroup({
      'nombre': new FormControl(this.afiliado.Nombre, Validators.required),
      'apellido': new FormControl(this.afiliado.Apellido, Validators.required),
      'contrasena': new FormControl(this.afiliado.Contrasena, [Validators.required, Validators.minLength(8)]),
      'cedula': new FormControl(this.afiliado.Cedula, Validators.required),
      'correo': new FormControl(this.afiliado.Correo, [Validators.required,
                                                       Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$') ]),
      'celular': new FormControl(this.afiliado.Celular, Validators.required),
      'terminosYCondiciones': new FormControl(false, Validators.requiredTrue)
    });
  }

  ngOnInit() {
  }

  guardar() {

    this.afiliado.Nombre = this.formulario.controls['nombre'].value;
    this.afiliado.Apellido = this.formulario.controls['apellido'].value;
    this.afiliado.Correo = this.formulario.controls['correo'].value;
    this.afiliado.Cedula = this.formulario.controls['cedula'].value;
    this.afiliado.Contrasena = this.formulario.controls['contrasena'].value;
    this.afiliado.Celular = this.formulario.controls['celular'].value;
    this._registrarseService.postAfiliado(this.afiliado)
    .subscribe(data => {
      console.log(data);
    });
  }

}
