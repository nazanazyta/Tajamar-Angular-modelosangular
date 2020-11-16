import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from './../../models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html'
})
export class ComicComponent implements OnInit {
  @Input() comic: Comic;
  @Input() posicion: number;
  @Output() enviarFavorito = new EventEmitter();
  @Output() borrarComic = new EventEmitter();
  @Output() modificarComic = new EventEmitter();

  constructor() { }

  ponerFavorito( event ){
    this.enviarFavorito.emit(this.comic);
  }

  eliminarComic() {
    this.borrarComic.emit(this.posicion);
  }

  editarComic(){
    this.modificarComic.emit(this.posicion);
  }

  ngOnInit(): void {
  }

}
