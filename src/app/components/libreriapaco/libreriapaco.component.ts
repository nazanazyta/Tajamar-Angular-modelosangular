import { Component, OnInit } from '@angular/core';
import { Comic } from './../../models/comic';

@Component({
  selector: 'app-libreria-paco',
  templateUrl: './libreriapaco.component.html'
})
export class LibreriaPacoComponent implements OnInit {
  public comics: Array<Comic>;
  public favorito: Comic;

  seleccionarFavorito(event){
    //AQUÍ VAMOS A RECIBIR EL ID
    var id = parseInt(event);
    this.favorito = this.comics[id];
  }

  eliminarComic(event){
    var index = parseInt(event);
    this.comics.splice(index, 1);
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
  }

  ngOnInit(): void {
  }

}
