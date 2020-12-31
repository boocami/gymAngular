import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './Componentes/nav/nav.component';
import { MainComponent } from './Componentes/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
