import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { BebidasEditComponent } from './pages/bebidas/bebidas-edit/bebidas-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/usuarios/cadastro-usuario/cadastro-usuario.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { ListaEventosComponent } from './pages/eventos/lista-eventos/lista-eventos.component';
import { EventosEditComponent } from './pages/eventos/eventos-edit/eventos-edit.component';
import { MudarSenhaComponent } from './pages/usuarios/mudar-senha/mudar-senha.component';
import { ListaUsuariosComponent } from './pages/usuarios/lista-usuarios/lista-usuarios.component';
import { UsuarioEditComponent } from './pages/usuarios/usuario-edit/usuario-edit.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'bebidas', component: BebidasComponent },
  { path: 'bebidas/edit/:id', component: BebidasEditComponent },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'vendas', component: VendasComponent },
  { path: 'lista-eventos', component: ListaEventosComponent },
  { path: 'evento/edit/:id', component: EventosEditComponent },
  { path: 'mudar-senha/:id', component: MudarSenhaComponent },
  { path: 'lista-usuarios' , component: ListaUsuariosComponent },
  { path: 'usuario/edit/:id', component: UsuarioEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
