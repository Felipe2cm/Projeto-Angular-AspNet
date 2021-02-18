import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuariosComponent } from '../usuarios/usuarios.component';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  showToaster(){
    this.showHTMLMessage("<h2>Hello, I'm the toastr message.<h2>", "Welcome", UsuariosComponent);
  }

  showHTMLMessage(message, title, user){
    this.toastr.success(message, title, {
        enableHtml :  true,        
        toastComponent: user,
        closeButton: true
    })
}
}
