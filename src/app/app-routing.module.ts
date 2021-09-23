import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { PostUsuarioComponent } from './usuario/post-usuario/post-usuario.component';
import { UpdateUsuarioComponent } from './usuario/update-usuario/update-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: 'usuario', component: UsuarioComponent},
  {path: 'usuario/create', component: PostUsuarioComponent},
  {path: 'usuario/update/:id', component: UpdateUsuarioComponent},
  {path: 'cliente', component: ClienteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
