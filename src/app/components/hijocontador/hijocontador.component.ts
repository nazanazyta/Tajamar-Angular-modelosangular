import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-contador',
  templateUrl: './hijocontador.component.html'
})
export class HijoContadorComponent implements OnInit {
  @Input() inicio: number;
  @Input() idContador: number;

  //DECLARAMOS UN MÉTODO PARA PODER
  //DEVOLVER LA INFORMACIÓN AL PADRE
  @Output() enviarIdContador = new EventEmitter();

  //VARIABLE PARA SABER EN QUÉ NÚMERO ESTÁ EL CONTADOR
  public numero: number;
  public mensaje: string;

  //REALIZAMOS LA LLAMADA AL PADRE CUANDO DESEEMOS
  //EL MÉTODO DE LLAMADA DEL HIJO TAMBIÉN TIENE QUE
  //RECIBIR EVENT, AUNQUE NO LO UTILICEMOS
  incrementarContador(event){
    this.numero = this.numero + 1;
    this.mensaje = "Contador en " + this.numero;
    //LLAMAMOS AL PADRE CON .emit
    this.enviarIdContador.emit(this.idContador);
  }

  constructor() { }

  ngOnInit(): void {
    //EL PADRE NOS DIRÁ EL INICIO Y EL ID
    this.numero = this.inicio;
    this.mensaje = "Contador Id: " + this.idContador
    + ", Valor inicial: " + this.inicio;
  }

}
