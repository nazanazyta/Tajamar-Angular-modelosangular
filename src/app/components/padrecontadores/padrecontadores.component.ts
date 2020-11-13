import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-contadores',
  templateUrl: './padrecontadores.component.html'
})
export class PadreContadoresComponent implements OnInit {
  public numeros: Array<number>;
  public mensaje: string;

  constructor() {
    this.numeros = [2,5,9,14];
  }

  //NECESITAMOS UN MÉTODO PARA RECIBIR
  //EL ID DEL CONTADOR DEL HIJO
  recibirIdContador( event ){
    //UTILIZAMOS EVENT DIRECTAMENTE PORQUE
    //VAMOS A RECIBIR UN NÚMERO (idContador)
    this.mensaje = "Contador incrementando: " + event;
  }

  ngOnInit(): void {
  }

}
