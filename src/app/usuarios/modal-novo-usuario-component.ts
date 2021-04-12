import {Component, OnInit, ViewChild, Inject, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {UsuariosService} from "./usuarios.service";
import {Router} from "@angular/router";



@Component({
  // selector: 'dialog-overview-example-dialog',
  templateUrl: 'modal-novo-usuario-component.html',
})
export class ModalNovoUsuarioComponent {
  @Output()
  teste;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  public selected;
  public nome = '';
  public cpf;
  public data;
  constructor(public dialog: MatDialog, private usuariosService: UsuariosService, private router: Router) {}

  fechaModal() {
    const dialogRef = this.dialog.closeAll();
  }

  salva() {
    let invalido = false;
    let date = new Date(this.data);
    let dataFormatada = (date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear());
    console.log(this.selected);
    console.log(this.nome);
    console.log(this.cpf);
    console.log(dataFormatada);

    if (!this.selected) {
      //erro
      invalido = true;
    } else if (!this.nome) {
      //erro
      invalido = true;
    } else if (!this.cpf) {
      //erro
      invalido = true;
    } else if (!dataFormatada) {
      //erro
      invalido = true;
    }

    let obj = {
      nome: this.nome,
      filmes: 0,
      cpf: this.cpf,
      dataNascimento: dataFormatada,
      sexo: this.selected,
      situacao: 'Ativo'
    }

    if (!invalido) {
      this.usuariosService.salvar(obj).subscribe((data: any) => {
        if (data.status.code === 200) {
          this.router.navigate(['/usuarios']);
          this.dialog.closeAll();
        }
      });
    }
  }
}
