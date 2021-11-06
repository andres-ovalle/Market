import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';


const routes: Routes =[
  
  {path: '', children: ()=> import('./components/dash-board')},
  {path: 'login', component: LoginComponent}
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
