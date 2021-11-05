import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  descripcion  = 'Chitos'
  valor ='$ 10.000'

  constructor() { }

  ngOnInit(): void {
  }

}
