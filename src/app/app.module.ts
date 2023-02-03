import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { RouterModule } from '@angular/router';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    ReactiveFormsModule,

    // Ng2SearchPipeModule
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    // LoginComponent
    // SearchPipe

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
