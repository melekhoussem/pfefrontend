import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConcoursService } from './concours.service';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConcoursComponent } from './concours/concours.component';
import { PosteComponent } from './poste/poste.component';
import { PosteService } from './poste.service';





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ConcoursComponent,
    PosteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule,AppRoutingModule
  ],
  providers: [ConcoursService , PosteService] ,
              
  bootstrap: [AppComponent]
})
export class AppModule { }











 
