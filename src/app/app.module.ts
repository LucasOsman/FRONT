import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PostUsuarioComponent } from './usuario/post-usuario/post-usuario.component';
import { FormsModule } from '@angular/forms';
import { UpdateUsuarioComponent } from './usuario/update-usuario/update-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ClienteComponent,
    PostUsuarioComponent,
    UpdateUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
