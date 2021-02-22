import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { UsuarioService } from '../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ToasterComponent } from '../../toaster/toaster.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioTipo } from 'src/models/UsuarioTipo';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuariosEditarComponent implements OnInit {

  public titulo = 'Usuarios';
  public usuarios: Usuario[];  
  public usuarioform: FormGroup;  
  public usuarioSelecionado: Usuario;
  public usuarioTipo: UsuarioTipo[];
  public mask_cpf = [/[0-9]/, /\d/, /\d/, '.',/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-' ,/\d/, /\d/];
  public mask_data = [/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  

  constructor(private usuarioService: UsuarioService,
              private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router) 
              { 
                const nav = this.router.getCurrentNavigation();
                this.usuarioSelecionado = nav.extras.state.usuario;    
                if(!this.usuarioSelecionado)
                {
                  this.usuarioSelecionado = new Usuario();
                  console.log(this.usuarioSelecionado);
                }
              }



  ngOnInit(): void {  
    this.carregarTipos();
  }

  showSweet(user: Usuario)
  {
    Swal.fire({
      icon: 'warning',
      title: 'Você realmente deseja excluir este usuário?',         
      showDenyButton: true,
      confirmButtonText: `Cancelar`,        
      denyButtonText: `Deletar`
    }).then((result) => {   
      if (result.isDenied) {
        Swal.fire('Usuário Deletado', '', 'success')
        this.usuarioDeletar(user);
        this.voltar();
      }
    })   
  }

  voltar()
  {
    console.log();
    this.router.navigateByUrl('/usuarios-lista');
  }

  showToaster(message, title)
  {
    this.toastr.success(message,title, {
      enableHtml :  true,              
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing',
      tapToDismiss: false    
  });
  }


  usuarioSubmit(form)
  {
    console.log(this.usuarioSelecionado);    
    if(this.usuarioSelecionado.id_Usuario == 0 )
    {
      this.usuarioPostar(this.usuarioSelecionado);
    }else{
      this.usuarioEditar(this.usuarioSelecionado);      
    }

    this.showToaster('Usuário salvo com sucesso.', 'Ok!');   
    this.voltar();
  }

  usuarioDeletar(user: Usuario)
  {
    this.usuarioService.delete(user)
        .then(res => console.log(res))
        .catch(res => console.log(res));
  }

  usuarioEditar(user: Usuario)
  {
    this.usuarioService.put(user)
        .then(res => console.log(res))
        .catch(res => console.log(res));    
  }

  usuarioPostar(user: Usuario)
  {
    this.usuarioService.post(user)
        .then(res => console.log(res))
        .catch(res => console.log(res));
  }

  Novo()
  {
    this.usuarioSelecionado = new Usuario();
  }

  carregarTipos()
  {
    this.usuarioService.getTipos()
    .then(v => this.usuarioTipo = v)
    .catch(erro => console.log(erro));
  }
}
