import { Injectable } from '@angular/core';
import { AuthRequest } from '../login/model/auth-request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../login/model/auth-response';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _token: string = '';

  constructor(private http: HttpClient) {
  }


  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem("token") != null) {
      this._token = sessionStorage.getItem("token") ? 'token': '';

      return this._token;
    }
    return '';
  }


  login(login: AuthRequest): Observable<AuthResponse> {

    const urlEndpoint = 'http://localhost:8080/login';
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<AuthResponse>(urlEndpoint, login, { headers: httpHeaders });
  }


  guardarToken(accessToken: string): void {
    if(sessionStorage.getItem("token")){
      this._token = sessionStorage['get']("token");
    }else{
      this._token = accessToken;
      sessionStorage.setItem("token", this._token);

    }
  }


}
