import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosEditarComponent } from './usuario/usuario-editar/usuario-editar.component';
import { ToasterComponent } from './toaster/toaster.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { TipoUsuarioComponent } from './tipoUsuario/tipo-usuario-editar/tipo-usuario-editar.component';
import { UsuariosListaComponent } from './usuario/usuario-lista/usuario-lista.component';

const routes: Routes = [
  {path: '', redirectTo: 'usuarios-lista', pathMatch: 'full'},
  {path: 'usuarios-editar', component: UsuariosEditarComponent},
  {path: 'toaster', component: ToasterComponent},
  {path: 'sweet', component: SweetalertComponent},
  {path: 'usuarios-lista', component: UsuariosListaComponent},
  {path: 'tipo-usuario', component: TipoUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
