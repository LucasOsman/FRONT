import { Component, OnInit } from '@angular/core';
import { GrupoService } from './services/grupo.service';
import { Grupo } from "./models/Grupo";

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent implements OnInit {
  grupos: Grupo[] = [];
  constructor(private service: GrupoService){}

  ngOnInit(): void {
    this.service.list().subscribe(grupos => {
      this.grupos = grupos;
      console.log(grupos);
    });
  }
}
