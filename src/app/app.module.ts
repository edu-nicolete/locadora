import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { InicioComponent } from './inicio/inicio.component';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosService } from './usuarios/usuarios.service';
import { ModalNovoUsuarioComponent } from './usuarios/modal-novo-usuario-component';
import { ModalDevolucaoFilmesComponent } from './inicio/modal-devolucao-filmes-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from './components/components.module';
// import { BemVindoLayoutModule } from './bem-vindo/bem-vindo.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import ptBr from '@angular/common/locales/pt';
import { MatSelectModule } from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    InicioComponent,
    MenuTopoComponent,
    ModalNovoUsuarioComponent,
    ModalDevolucaoFilmesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ComponentsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    // BemVindoLayoutModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [
    UsuariosService,
    MatDatepickerModule,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ModalNovoUsuarioComponent, ModalDevolucaoFilmesComponent ]
})
export class AppModule { }
