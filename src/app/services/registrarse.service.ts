import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Afiliado } from '../models/afiliado';


@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {
 url = 'http://localhost:63600/api/afiliados';

  constructor(private http: HttpClient) {
    console.log('a su servicio');
  }

  postAfiliado(afiliado: Afiliado) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    console.log(afiliado);
    return this.http.post(this.url, afiliado, { headers } );
  }
}
