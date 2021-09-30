import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuarios: Usuario[] = [];
  constructor(private usuarioService: UsuarioService){}  
  

  ngOnInit(): void{
    this.usuarioService.list()
    .subscribe(res => this.usuarios = res);
      console.log(this.usuarios);
  }
}
