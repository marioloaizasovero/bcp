import { Component, OnInit } from '@angular/core';

import { TipoCambioService } from '../services/tipo-cambio.service';
import { TipoCambio } from '../model/TipoCambio';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tipoCambio: TipoCambio[] = [];

  constructor(private tipoCambioService: TipoCambioService) { }


  ngOnInit(): void {

    this.tipoCambioService.getListaCambios()
      .subscribe((resp: any) => this.tipoCambio = resp);
  }



}
