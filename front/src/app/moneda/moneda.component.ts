import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { TipoCambioService } from '../services/tipo-cambio.service';

import { TipoCambioRequest } from '../model/TipoCambioRequest';
import { TipoCambio } from '../model/TipoCambio';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css']
})
export class MonedaComponent implements OnInit {

  tipoCambio: TipoCambio = new TipoCambio();
  tipoCambioRequest: TipoCambioRequest = new TipoCambioRequest();
  constructor(private router:Router,private activatedRouter:ActivatedRoute,private typeService:TipoCambioService) { }


  ngOnInit(): void {
    this.cargarTipoCambio();

  }

  cargarTipoCambio():void{
    this.activatedRouter.params.subscribe(
      params=>{
          let id = params["id"];
          if(id){
            this.typeService.getTipoCambio(id).subscribe((type)=>this.tipoCambio = type);
          }
      }
    )
  }

  public create():void{
    this.router.navigate(['/dashboad']);
    this.typeService.create(this.tipoCambioRequest).subscribe(
      response=>this.router.navigate(['dashboard'])
    )
      
}

}
