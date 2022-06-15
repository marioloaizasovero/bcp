import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { TipoCambio } from '../model/TipoCambio';
import { TipoCambioRequest } from '../model/TipoCambioRequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { ServiceService } from '../services/login_service.service';



import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  private baseUrl = 'http://localhost:8080/api/moneda';
  private httpHeaders: any;
  token: string = this.auth.token;
  constructor(private http: HttpClient, private auth: ServiceService) { 

 
  }


  // funcion para obtener todos los tipos de cambio 
  getListaCambios(): Observable<TipoCambio[]> {
  
    

    this.httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +  sessionStorage.getItem("token")
      }
    );
    return this.http.get(this.baseUrl, { headers: this.httpHeaders }).pipe(map(resp => resp as TipoCambio[])
    );
  }

    getTipoCambio(id: string = ''):Observable<TipoCambio>{
      this.httpHeaders = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+sessionStorage.getItem("token")
        }
      ); 
      return this.http.get<TipoCambio>(`${this.baseUrl}/${id}`,{headers: this.httpHeaders});
    }

   create(tipoCambioRequest:TipoCambioRequest):Observable<TipoCambioRequest>{
    this.httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+sessionStorage.getItem("token")
      }
    );
      return this.http.post<TipoCambioRequest>(this.baseUrl,tipoCambioRequest,{headers: this.httpHeaders})
    }

}
