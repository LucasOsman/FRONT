import { Component, OnInit } from '@angular/core';
import { ClienteService } from './services/cliente.service';
import { Cliente } from './models/Cliente';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private service: ClienteService){}  

  ngOnInit(): void {
    this.service.list().subscribe(clientes => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }
}
