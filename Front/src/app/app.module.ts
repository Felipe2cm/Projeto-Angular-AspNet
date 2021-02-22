import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosEditarComponent } from './usuario/usuario-editar/usuario-editar.component';
import { TituloComponent } from './titulo/titulo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToasterComponent } from './toaster/toaster.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { UsuariosListaComponent } from './usuario/usuario-lista/usuario-lista.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TipoUsuarioComponent } from './tipoUsuario/tipo-usuario-editar/tipo-usuario-editar.component';
import { TipoUsuarioListarComponent } from './tipoUsuario/tipo-usuario-listar/tipo-usuario-listar.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosEditarComponent,
    TituloComponent,
    ToasterComponent,
    SweetalertComponent,
    UsuariosListaComponent,
    NavbarComponent,
    TipoUsuarioComponent,
    TipoUsuarioListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    FormsModule,
    TextMaskModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
