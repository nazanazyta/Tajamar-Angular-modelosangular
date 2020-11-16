import { Component, OnInit } from '@angular/core';
import { Comic } from './../../models/comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html'
})
export class LibreriaComponent implements OnInit {
  public comics: Array<Comic>;
  public favorito: Comic;
  public edit: number;
  public cambio : Comic;
  public crear: boolean;
  public nuevo: Comic;
  // @ViewChild("nombre") nombre: ElementRef;

  recibirFavorito( event ){
    this.favorito = event;
    this.edit = -1;
    this.crear = false;
  }

  eliminarComic(event) {
    var index = parseInt(event);
    if(this.comics[index] == this.favorito){
      this.favorito = null;
    }
    this.comics.splice(index, 1);
    this.edit = -1;
    this.crear = false;
  }

  mostrarFormulario(event){
    var index = parseInt(event);
    // console.log(index);
    // console.log(this.edit);
    this.edit = index;
    // console.log(this.edit);
    this.crear = false;
    this.cambio.nombre = "";
    this.cambio.imagen = "";
    this.cambio.descripcion = "";
  }

  editarComic(){
    // console.log(this.cambio.nombre);
    if(this.cambio.nombre != "" && this.cambio.nombre != " "){
      this.comics[this.edit].nombre = this.cambio.nombre;
    }
    if(this.cambio.imagen != "" && this.cambio.imagen != " "){
      this.comics[this.edit].imagen = this.cambio.imagen;
    }
    if(this.cambio.descripcion != "" && this.cambio.descripcion != " "){
      this.comics[this.edit].descripcion = this.cambio.descripcion;
    }
    // this.comics[this.edit] = this.cambio;
    // console.log(this.cambio);
    this.edit = -1;
    this.crear = false;
  }

  mostrarNuevoFormulario(){
    this.crear = true;
    this.edit = -1;
    this.nuevo.nombre = "";
    this.nuevo.imagen = "";
    this.nuevo.descripcion = "";
  }

  nuevoComic(){
    if(this.nuevo.nombre != "" && this.nuevo.nombre != " "){
      if(this.nuevo.imagen != "" && this.nuevo.imagen != " "){
        if(this.nuevo.descripcion != "" && this.nuevo.descripcion != " "){
          var objeto = {
            nombre: this.nuevo.nombre,
            imagen: this.nuevo.imagen,
            descripcion: this.nuevo.descripcion
          }
          this.comics.push(objeto);
          this.crear = false;
        }else{
          alert("Falta descripción");
        }
      }else{
        alert("Falta imagen");
      }
    }else{
      alert("Falta nombre");
    }
  }

  cancelar() {
    this.edit = -1;
    this.crear = false;
  }

  quitarFavorito() {
    this.favorito = null;
  }

  constructor() {
    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        "Yo soy Groot"
      )
    ];
    this.nuevo = {
      nombre: "",
      imagen: "",
      descripcion: ""
    };
    this.cambio = {
      nombre: "",
      imagen: "",
      descripcion: ""
    }
  }

  ngOnInit(): void {
    this.favorito = null;
  }

}
