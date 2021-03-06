import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcoursComponent } from './concours/concours.component';
import { SidebarComponent } from './sidebar/sidebar.component';
;
const routes: Routes = [
  
  { path:'concours' , component:ConcoursComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
