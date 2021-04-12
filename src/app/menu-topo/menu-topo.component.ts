import { Component, OnInit, Output } from '@angular/core';
// import { MenuLateralComponent } from './../menu-lateral/menu-lateral.component';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {
  mostraMenu: boolean;

  constructor(
    private serviceLogin: UsuariosService,
     private router: Router) {
  }

  ngOnInit() {
  }

  // logoff(){
  //   this.serviceLogin.logoutAplicacao().subscribe((data: any) => {
  //     console.log('data', data);
  //     if (data.status) {
  //       this.router.navigate(['']);
  //     } else {
  //       alert();
  //     }
  //   });
  // }

}
