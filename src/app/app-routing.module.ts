import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ExpComponent } from './pages/exp/exp.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TechsComponent } from './pages/techs/techs.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', title: 'Página inicial', component: HomeComponent},
  {path: 'sobre', title: 'Sobre', component: AboutComponent},
  {path: 'exp', title: 'Experiências', component: ExpComponent},
  {path: 'tecnologias', title: 'Tecnologias', component: TechsComponent},
  {path: 'projetos', title: 'Projetos', component: ProjectsComponent},
  {path: '**', title: 'Pagina não encontrada', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
