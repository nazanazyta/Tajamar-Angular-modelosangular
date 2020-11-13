import { Component, OnInit } from '@angular/core';
import { Producto } from './../../models/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './listaproductos.component.html'
})
export class ListaProductosComponent implements OnInit {
  //DECLARAMOS UNA VARIABLE DEL TIPO MODELO Producto
  // public producto: Producto;
  //DECLARAMOS UNA VARIABLE Array DEL TIPO MODELO Producto 
  public productos: Array<Producto>;

  constructor() {
    //CUANDO UTILIZAMOS MODELOS SE UTILIZA
    //LA PALABRA new PARA CREAR OBJETOS
    //EN EL MOMENTO EN QUE PONEMOS EL new, ENTRA EN EL
    //CONSTRUCTOR DE LA CLASE MODELO Producto
    // this.producto = new Producto("Constructor!!!", "Cacao", 14);
    // this.producto.nombre = "Leche";
    // this.producto.imagen = "lalala";
    // this.producto.precio = 3;
    this.productos = [
      new Producto(
       "Nike Air Jordan",
       "https://i.ebayimg.com/images/g/lEsAAOSwBJpc1MAN/s-l300.jpg",
       150
      ),
      new Producto(
       "New Balance 1530",
       "https://cdn.webshopapp.com/shops/164432/files/292835943/new-balance-m1530kgl-olive-grey-pink-made-in-uk.jpg",
       140
      ),
      new Producto(
       "J-Hayber Olimpo",
       "https://jhayber.com/documents/images/products/63638-850-1.jpg",
       60
      ),
      new Producto(
       "Vans",
       "https://media.vogue.es/photos/5cc75028fdc822a6611ff5bb/master/w_2700,c_limit/voguees_moda_tendencias_250218163.jpg",
       75
      )
     ];
  }

  ngOnInit(): void {
  }

}
