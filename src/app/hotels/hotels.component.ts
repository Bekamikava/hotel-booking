import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-hotels',
  standalone: false,
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {

product:any;
constructor(private service:HttpService){
    this.service.getAllCategory().subscribe((data:any) =>{
this.product = data;


console.log(this.product);



    })

  }
}








