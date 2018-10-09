import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SolicitarCitaComponent } from './components/solicitar-cita/solicitar-cita.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/cuenta/login/login.component';
import { RegistrarseComponent } from './components/cuenta/registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SolicitarCitaComponent,
    HomeComponent,
    LoginComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
