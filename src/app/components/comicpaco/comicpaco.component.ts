import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic-paco',
  templateUrl: './comicpaco.component.html'
})
export class ComicPacoComponent implements OnInit {
  @Input() comic: Comic;
  @Input() indice: number;
  @Output() seleccionarFavorito = new EventEmitter;
  @Output() eliminarComic = new EventEmitter;

  marcarFavorito(){
    // console.log("Seleccionado");
    this.seleccionarFavorito.emit(this.indice);
  }

  deleteComic(){
    this.eliminarComic.emit(this.indice);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
