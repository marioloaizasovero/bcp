import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../services/login_service.service';
import { Observable } from 'rxjs';
import { TipoCambio } from '../model/TipoCambio';
import { map, tap } from 'rxjs/operators';
import { CambiarMontoRequest } from '../model/CambiarMontoRequest';
import { CambiarMontoResponse } from '../model/CambiarMontoResponse';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {

  private baseUrl = 'http://localhost:8080/api/';
  private httpHeaders = new HttpHeaders;
  token:string = this.auth.token;
  constructor(private http: HttpClient,private auth: ServiceService) { }


  getAllOriginCurrency(): Observable<TipoCambio[]> {
      
    this.httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+sessionStorage.getItem("token")
      }
    ); 
    return this.http.get(this.baseUrl+"moneda",{headers: this.httpHeaders}).pipe(map(resp => resp as TipoCambio[])
    );
  }

  getAllDestinationCurrency(): Observable<TipoCambio[]> {
      
    this.httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+sessionStorage.getItem("token")
      }
    ); 
    return this.http.get(this.baseUrl+"moneda",{headers: this.httpHeaders}).pipe(map(resp => resp as TipoCambio[])
    );
  }

  process(currency:CambiarMontoRequest):Observable<CambiarMontoRequest>{
    this.httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+sessionStorage.getItem("token")
      }
    );
      return this.http.post<CambiarMontoResponse>(this.baseUrl+"calcularResultado",currency,{headers: this.httpHeaders});
    }



}
