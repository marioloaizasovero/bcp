import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MonedaComponent } from './moneda/moneda.component';
import { CalcularComponent } from './calcular/calcular.component'


const routes: Routes = [
  { path: '',component:LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboad', component: DashboardComponent },
  { path: 'moneda', component: MonedaComponent },
  { path: 'moneda/:id', component: MonedaComponent },
  { path: 'calcular', component: CalcularComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MonedaComponent,
    CalcularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
