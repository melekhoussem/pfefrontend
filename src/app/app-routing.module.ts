import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcoursComponent } from './concours/concours.component';
import { PosteComponent } from './poste/poste.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: 'authentication', component:AuthComponent },
   {path:'' ,redirectTo:'authentication',pathMatch:'full' },
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
