import { Component, OnInit } from '@angular/core';
import { AuthRequest } from './model/auth-request';
import { ServiceService } from '../services/login_service.service';

import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   authRequest: AuthRequest;

  titulo: string = "Login";

  constructor(private authService: ServiceService, private router: Router) {
    this.authRequest = new AuthRequest();
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.authRequest);
    if (this.authRequest.username == null || this.authRequest.password == null) {
     // Swal.fire('Error login', 'Usuario o contraseña vacias!', 'error');
      return;
    }

    this.authService.login(this.authRequest).subscribe( (response:any) => {

      
      console.log(response);

     this.authService.guardarToken(response.token);
      this.router.navigate(['/dashboad']);
       //Swal.fire('Login', `Hola ${this.authRequest.username} , has iniciado sesión con exito!`, 'success');
    },error=>{
      if(error.status == 400){
        alert("Usuario o clave incorrectas!");
      }
  
      if(error.status == 401){
               alert("No se encuentra registrado");
      }
    });
  };

}
