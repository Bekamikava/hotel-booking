import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-contactus',
  standalone: false,
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
 product:any;


 filterData = {
    roomTypeId: null,
    priceFrom: null,
    priceTo: null,
    maximumGuests: null,
    checkIn: '',
    checkOut: ''
  }; 


constructor(private service:HttpService){
    this.service.allRoomsfilter().subscribe((data:any) =>{
this.product = data;


console.log(this.product);



    })

  }
applyRoomFilter() {
  const now = new Date().toISOString();

  const filterPayload = {
    ...this.filterData,
    checkIn: this.filterData.checkIn ? new Date(this.filterData.checkIn).toISOString() : now,
    checkOut: this.filterData.checkOut ? new Date(this.filterData.checkOut).toISOString() : now
  };
console.log(this.filterData);

  console.log('sending filter:', filterPayload);

  this.service.filterRooms(filterPayload).subscribe((data: any) => {
    this.product = data;
    console.log('Filtered rooms:', this.product);
  });
}

}
