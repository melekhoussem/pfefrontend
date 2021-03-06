import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConcoursService } from './concours.service';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConcoursComponent } from './concours/concours.component';





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ConcoursComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule,AppRoutingModule
  ],
  providers: [ConcoursService],
  bootstrap: [AppComponent]
})
export class AppModule { }











 
