import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcoursComponent } from './concours/concours.component';
import { PosteComponent } from './poste/poste.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  
   {path:'' ,redirectTo:'home',pathMatch:'full' },
   {path:'home' , component:SidebarComponent},
   { path:'concours' , component:ConcoursComponent},
   { path:'poste' , component:PosteComponent},
  {path:'**' , redirectTo:'home'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
