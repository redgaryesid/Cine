import { PeliculasService } from './peliculas.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './Components/hola-mundo.components';
import { HeaderComponent } from './header/header.component';
import { LogginComponent } from './loggin/loggin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    HeaderComponent,
    LogginComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
