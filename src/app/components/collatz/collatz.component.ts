import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html'
})
export class CollatzComponent implements OnInit {
  public numero: number;
  public arrayCollatz: Array<number>;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.arrayCollatz = [];
  }

  hacerCollatz(num){
    this.arrayCollatz = [];
    while(num !== 1){
      if(num % 2 === 0){
      num /= 2;
      }else{
        num = num * 3 + 1;
      }
      this.arrayCollatz.push(num);
    }  
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(( params: Params ) => {
      if(params.numero != null){
        this.numero = parseInt(params.numero);
        this.hacerCollatz(this.numero);
      }
    });
  }
}
