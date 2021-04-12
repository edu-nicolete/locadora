import {Component, OnInit, ViewChild, Inject, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { FilmesService } from './inicio.service';
import { Router } from '@angular/router';



@Component({
  // selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal-devolucao-filmes-component.html',
})
export class ModalDevolucaoFilmesComponent {
  public selected;
  public nome = '';
  public cpf;
  public data;
  public usuarios;
  public nomeFilme;
  public categoriaFilme;

  constructor(public dialog: MatDialog,
              private filmesService: FilmesService,
              @Inject(MAT_DIALOG_DATA) public data1: {tipo: string, nome: string, cpf: string,
                nascimento: string, sexo: string, filme: any, usuarios: any, historico: any}) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    console.log('entrou', this.data1);
    this.data = this.data1.nascimento;
    this.nome = this.data1.nome;
    this.cpf = this.data1.cpf;
    this.selected = this.data1.sexo;

    if (this.data1.tipo === 'visualizar') {
      this.nomeFilme = this.data1.filme.nome;
      this.categoriaFilme = this.data1.filme.categoria;
    }

    if (this.data1.usuarios) {
      this.usuarios = this.data1.usuarios;
    }
  }

  fechaModal() {
    const dialogRef = this.dialog.closeAll();
  }

  salva() {
    console.log('selected', this.selected);
    if (this.data1.tipo === 'devolucao') {
      this.filmesService.salvar(this.data1.filme).subscribe((data: any) => {
        if (data.status.code === 200) {
          this.dialog.closeAll();
        }
      });
    } else if (this.data1.tipo === 'locacao') {
      const obj = {
        filme: this.data1.filme,
        cliente: this.selected.id
      };
      this.filmesService.salvarLocacao(obj).subscribe((data: any) => {
        if (data.status.code === 200) {
          this.dialog.closeAll();
        }
      });
    }

  }

}
