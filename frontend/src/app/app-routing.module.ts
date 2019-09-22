import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home//home.component';
import {ProcurarComponent} from './procurar/procurar.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'procurar', component: ProcurarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
