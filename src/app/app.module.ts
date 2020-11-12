import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MenuCollatzComponent } from './components/menucollatz/menucollatz.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { ListaProductosComponent } from './components/listaproductos/listaproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuCollatzComponent,
    CollatzComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule
    , routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
