import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {


  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.usuarioService.getById('2');
  }

}
