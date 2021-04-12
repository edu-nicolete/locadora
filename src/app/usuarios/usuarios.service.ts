import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  listaUsuarios() {
    return this.http.post('/api/listaUsuarios', '');
  }
  salvar(req) {
    return this.http.post('/api/salvarUsuario', req);
  }

}
