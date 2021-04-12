import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { ModalNovoUsuarioComponent } from './modal-novo-usuario-component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {
  @Input()
  teste;

  usuarios: any;

  constructor(private usuariosService: UsuariosService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    console.log('teste', this.teste);
    this.usuariosService.listaUsuarios().subscribe((data: any) => {
      console.log('data', data);
      this.usuarios = data.data;
    });
  }

  abreCadastroUsuario() {
    console.log('entrou');
    const dialogRef = this.dialog.open(ModalNovoUsuarioComponent, {
      width: '80%',
      height: '80%',
      data: {name: 'this.name', animal: 'this.animal'}
    });
  }

}
