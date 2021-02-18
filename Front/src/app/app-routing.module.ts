import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ToasterComponent } from './toaster/toaster.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';

const routes: Routes = [
  {path: '', redirectTo: 'usuarios-lista', pathMatch: 'full'},
  {path: 'usuarios', component: UsuariosComponent},
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
