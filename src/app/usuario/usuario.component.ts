import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: any;
  colunasExibidas: String[] = [
    "login",
    "nome",
    "dataCadastro",
    "dataAtualizacao"
];
  constructor(private usuarioService: UsuarioService){}  
  

  ngOnInit(): void{
    this.list();
  };

  list(): void {
    this.usuarioService.list()
      .subscribe(
        data => {
          this.usuarios = data.data;
        },
        error => {
          console.log(error);
        });
  }
  
}
