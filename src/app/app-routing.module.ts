import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes =[
  
  {path: '', component :DashBoardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
