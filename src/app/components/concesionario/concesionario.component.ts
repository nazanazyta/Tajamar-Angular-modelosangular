import { Component, OnInit } from '@angular/core';
import { Coche } from './../../models/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html'
})
export class ConcesionarioComponent implements OnInit {
  public coches: Array<Coche>;

  constructor() {
    this.coches = [
      new Coche("Ford", "Mustang", 0, 240, 30, false),
      new Coche("Seat", "Ibiza", 0, 150, 5, false),
      new Coche("Opel", "Astra", 0, 220, 60, false)
    ]
  }

  ngOnInit(): void {
  }

}
