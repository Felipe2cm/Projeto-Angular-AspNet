import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { UsuarioTipo } from 'src/models/UsuarioTipo';
import { UsuarioService } from '../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  public titulo = "Lista de Usuários"
  public usuarios: Usuario[];
  public usuarioSelecionado = new Usuario();

  constructor(private usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit(): void {    
    this.carregarUsuario();
  }

  sendUsuario(user: Usuario)
  {
    console.log(user);
    this.router.navigateByUrl('/usuarios-editar', {
      state: {usuario: user}
    });    
  }

  usuarioBuscar()
  {
    var teste = this.usuarioSelecionado.nome_Usuario;
    
    if(!teste)
    {
      teste = '_';
    }

    this.usuarioService.getByName(teste)
        .then(res => this.usuarios = res)
        .catch(res => console.log(res));
  }

  async carregarUsuario()
  {    
    await this.usuarioService.getAll()
        .then(v => {
            this.usuarios = v
          })
        .catch(erro => 
          {
            console.log(erro)
          });

  }

  usuarioNovo()
  {
    this.router.navigateByUrl('/usuarios-editar', {
      state: {usuario: null}
    });
  }

 
}
