import { Component, OnInit } from '@angular/core';
import { Retorno } from 'src/app/models/Retorno';
import { PostUsuarioRequest } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-post-usuario',
  templateUrl: './post-usuario.component.html',
  styleUrls: ['./post-usuario.component.css']
})
export class PostUsuarioComponent implements OnInit {

request: PostUsuarioRequest = {
 nome: '',
 login: '',
 senha: ''
}

retorno: Retorno = {
  resposta: ''
}

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  save(){
    this.usuarioService.create(this.request).subscribe(res =>  {
      this.retorno;
    },
    error => console.error(error)); 
  }
}
