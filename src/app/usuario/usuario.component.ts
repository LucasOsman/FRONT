import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  constructor(private usuarioService: UsuarioService){}  
  public usuarios: Usuario[] = [];

  ngOnInit(): void{
    this.usuarioService.list()
    .subscribe(
      usuarios => {
      this.usuarios = Object.values(this.usuarios);
    },
    error => console.error(error)); 
  }
}
