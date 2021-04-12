import { Component, OnInit } from '@angular/core';
import { FilmesService } from './inicio.service';
import { ModalDevolucaoFilmesComponent } from './modal-devolucao-filmes-component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public filmes: any;

  constructor(private filmesService: FilmesService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.filmesService.listaFilmes().subscribe((data: any) => {
      console.log('data', data);
      this.filmes = data.data;
    });
  }

  abreModalDevolucao(item) {
    console.log('entrou', item);
    if (item) {
      this.filmesService.recuperaClienteFilme(item.idClienteAlugado).subscribe((data: any) => {
        console.log('data', data.data);
        if (data) {
          const dialogRef = this.dialog.open(ModalDevolucaoFilmesComponent, {
            width: '80%',
            height: '80%',
            data: {tipo: 'devolucao', nome: data.data.nome, cpf: data.data.cpf, nascimento: data.data.nascimento,
              sexo: data.data.sexo, filme: item}
          });
        }
      });
    }
  }

  abreModalLocacao(item) {
    console.log('entrou', item);
    if (item) {
      this.filmesService.listaUsuarios().subscribe((data: any) => {
        console.log('data', data);
        const dialogRef = this.dialog.open(ModalDevolucaoFilmesComponent, {
          width: '80%',
          height: '80%',
          data: {tipo: 'locacao', usuarios: data.data, filme: item}
        });
      });

    }
  }

  abreModalVisualizar(item) {
    let usuario = null;
    if (item) {
      this.filmesService.recuperaClienteFilme(item.idClienteAlugado).subscribe((data: any) => {
        console.log('data', data);
        if (data) {
          usuario = data.data;
        }
        const dialogRef = this.dialog.open(ModalDevolucaoFilmesComponent, {
          width: '80%',
          height: '80%',
          data: {tipo: 'visualizar', usuarios: usuario, filme: item}
        });
      });
    }
  }

  abreModalHistorico(item) {
    console.log('item', item);
    if (item) {
      this.filmesService.recuperaHistoricoFilme(item).subscribe((data: any) => {
        console.log('data', data);
        const dialogRef = this.dialog.open(ModalDevolucaoFilmesComponent, {
          width: '80%',
          height: '80%',
          data: {tipo: 'historico', historico: data.data, filme: item}
        });
      });
    }
  }

}
