import { Component, OnInit } from '@angular/core';
import { Producto } from './../../models/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaProductosComponent implements OnInit {
  //DECLARAMOS UNA VARIABLE DEL TIPO MODELO Producto
  public producto: Producto;

  constructor() {
    //CUANDO UTILIZAMOS MODELOS SE UTILIZA
    //LA PALABRA new PARA CREAR OBJETOS
    //EN EL MOMENTO EN QUE PONEMOS EL new, ENTRA EN EL
    //CONSTRUCTOR DE LA CLASE MODELO Producto
    this.producto = new Producto("Constructor!!!", "Cacao", 14);
    // this.producto.nombre = "Leche";
    // this.producto.imagen = "lalala";
    // this.producto.precio = 3;
  }

  ngOnInit(): void {
  }

}
