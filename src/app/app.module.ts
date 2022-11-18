import { EquiposComponent } from './pages/equipos/equipos.component';
import { TablaEquiposComponent } from './components/tablaEquipos/tablaEquipos.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, FooterComponent, FormularioComponent, HomeComponent, TablaEquiposComponent, EquiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
