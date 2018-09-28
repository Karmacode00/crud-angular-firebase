import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  item:any = {
    name:""
  }

  constructor(private service:ConexionService) { }

  ngOnInit() {
  }

  agregar() {
    this.service.addItem(this.item);
    this.item.name = '';

  }

}
