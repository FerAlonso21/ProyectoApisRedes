import { Component, OnInit } from '@angular/core';
import { OwnService } from './own.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontProyectoFinal';
  comics:any=[];
  constructor(private servicio:OwnService){

  }

  ngOnInit(): void{
    this.servicio.comics().subscribe((res:any)=>{
     
      this.comics=res;
      console.log(this.comics)
    })
  }



}
