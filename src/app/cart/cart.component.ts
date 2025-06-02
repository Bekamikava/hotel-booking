import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
products:any;

constructor(private http:HttpService){
this.cart();


}


cart(){
 this.http.BookedRooms().subscribe((data:any) =>{
      this.products = data;
      console.log(this.products);
      
      })


}

 deleteProduct(id:number){
    this.http.deleteid(id).subscribe(
      (response)=>{
        alert('delete');
        this.cart()
        
      },
      (error)=>{
        console.log(error);
        this.cart()
      }
    )
  }

}
