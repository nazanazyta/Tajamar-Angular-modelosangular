import { Component, OnInit, Input } from '@angular/core';
import { Coche } from './../../models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  // public car: Coche;
  @Input() car: Coche;
  public mensaje: string;

  constructor() {
    // this.car = new Coche("Opel", "Astra", 0, 200, 30, false);
    // this.comprobarEstado();
  }
  //CUANDO RECIBIMOS OBJETOS, NO SE UTILIZA EL CONSTRUCTOR
  ngOnInit(): void {
    this.comprobarEstado();
  }

  comprobarEstado(){
    if(this.car.estado == false){
      this.mensaje = "El coche está apagado";
      this.car.velocidad = 0;
      return false;
    }else{
      this.mensaje = "El coche está encendido";
      return true;
    }
  }

  cambiarEstado(){
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche(){
    if(this.comprobarEstado() == false){
      alert("El coche no está encendido");
    }else{
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
      if(this.car.velocidad >= this.car.velocidadmaxima){
        this.car.velocidad = this.car.velocidadmaxima;
      }
    }
  }
}
