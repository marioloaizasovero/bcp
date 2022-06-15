import { Component, OnInit } from '@angular/core';


import { CalcularService } from '../services/calcular.service';
import { Observable } from 'rxjs';
import { TipoCambio } from '../model/TipoCambio';
import { map, tap } from 'rxjs/operators';
import { CambiarMontoRequest } from '../model/CambiarMontoRequest';
import { CambiarMontoResponse } from '../model/CambiarMontoResponse';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent implements OnInit {

  origenMoneda: TipoCambio[] = [];
  destinoMoneda: TipoCambio[] = [];

  tipoC: TipoCambio = new TipoCambio();
  monto: CambiarMontoRequest = new CambiarMontoRequest();
  cambiarMontoResponse: CambiarMontoResponse = new CambiarMontoResponse();
  constructor(private changeCurrency: CalcularService) {

  }

  ngOnInit() {
    this.cargarMonto();
  }

  cargarMonto():void{
    this.changeCurrency.getAllOriginCurrency().subscribe(resp=>{
      console.log(resp);
      this.origenMoneda = resp;
    })

    this.changeCurrency.getAllDestinationCurrency().subscribe(resp=>{
      console.log(resp);
      this.destinoMoneda = resp;
    })
  }

  processCurrency():void{
    
    this.monto.tipoCambio = this.tipoC;
    console.log(this.monto);
    this.changeCurrency.process(this.monto).subscribe(resp=>{
      console.log(resp);
      this.cambiarMontoResponse = resp;
    });
  }
 

}
