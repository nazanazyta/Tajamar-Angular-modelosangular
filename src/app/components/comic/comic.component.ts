import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from './../../models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html'
})
export class ComicComponent implements OnInit {
  @Input() comic: Comic;

  @Output() enviarFavorito = new EventEmitter();

  constructor() { }

  ponerFavorito( event ){
    this.enviarFavorito.emit(this.comic);
  }

  ngOnInit(): void {
  }

}
