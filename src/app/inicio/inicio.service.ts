import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  listaFilmes() {
    console.log('entrou');
    return this.http.post('/api/listaFilmes', '');
    console.log('entrou 2');
  }

  recuperaClienteFilme(idCliente) {
    let obj = {
      idCliente: idCliente
    }
    return this.http.post('/api/recuperaClienteFilme', obj);
  }

  salvar(filme) {
    return this.http.post('/api/salvaDevolucao', filme);
  }

  listaUsuarios() {
    return this.http.post('/api/listaUsuarios', '');
  }

  salvarLocacao(obj) {
    return this.http.post('/api/salvarLocacao', obj);
  }

  recuperaHistoricoFilme(obj) {
    return this.http.post('/api/recuperaHistoricoFilme', obj);
  }
}
