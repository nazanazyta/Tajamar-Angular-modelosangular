import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MenuCollatzComponent } from './components/menucollatz/menucollatz.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { ListaProductosComponent } from './components/listaproductos/listaproductos.component';
import { CocheComponent } from './components/coche/coche.component';
import { ConcesionarioComponent } from './components/concesionario/concesionario.component';
import { HijoContadorComponent } from './components/hijocontador/hijocontador.component';
import { PadreContadoresComponent } from './components/padrecontadores/padrecontadores.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaPacoComponent } from './components/libreriapaco/libreriapaco.component';
import { ComicPacoComponent } from './components/comicpaco/comicpaco.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuCollatzComponent,
    CollatzComponent,
    ListaProductosComponent,
    CocheComponent,
    ConcesionarioComponent,
    HijoContadorComponent,
    PadreContadoresComponent,
    LibreriaComponent,
    ComicComponent,
    LibreriaPacoComponent,
    ComicPacoComponent,
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
