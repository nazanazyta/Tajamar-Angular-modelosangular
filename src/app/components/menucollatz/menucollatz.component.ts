import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-collatz',
  templateUrl: './menucollatz.component.html'
})
export class MenuCollatzComponent implements OnInit {
  public numeros: Array<number>;

  constructor() {
    this.numeros = [];
  }

  ngOnInit(): void {
    for(var i = 0; i < 6; i++){
      this.numeros.push(Math.floor(Math.random() * 10) + 1);
    }
  }

}
