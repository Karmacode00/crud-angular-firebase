import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css']
})
export class MuroComponent implements OnInit {

  items:any;

  constructor(private conexion:ConexionService) { 
    this.conexion.listaItems().subscribe(item=>{
      this.items = item;
    });
  }
  ngOnInit() {
  }

}
