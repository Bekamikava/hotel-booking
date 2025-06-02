
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],  
})
export class BookingComponent {
  
  room: any;
  id: any;

  bookingData = {
    id: 0,
    roomID: 0,
    checkInDate: '',
    checkOutDate: '',
    totalPrice: 0,
    isConfirmed: true,
    customerName: '',
    customerId: '',
    customerPhone: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http
      .get<any[]>('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
      .subscribe((rooms) => {
        this.room = rooms.find((r) => r.id == this.id);
        console.log(this.room);
      });
  }
calculateTotalPrice(): number {
  const checkIn = new Date(this.bookingData.checkInDate);
  const checkOut = new Date(this.bookingData.checkOutDate);

  const diffTime = checkOut.getTime() - checkIn.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

  if (diffDays <= 0) {
    alert('Check-in თარიღი უნდა იყოს check-out თარიღზე ადრე.');
    return 0;
  }

  return this.room?.pricePerNight * diffDays || 0;
}

  submitBooking() {
    if (!this.room) {
      alert('არც ერთი ოთახი არ არის არჩეული');
      return;
    }

    this.bookingData.roomID = this.room.id;
    this.bookingData.totalPrice = this.room.price;

    this.http.post('https://hotelbooking.stepprojects.ge/api/Booking', this.bookingData)
      .subscribe({
        next: (response) => {
          // alert('ჯავშანი წარმატებით განხორციელდა!');
          console.log('Response:', response);
        },
        error: (error) => {
          // alert('ჯავშანი წარმატებით  განხორციელდა!');
          console.error('Error:', error);
        }
      });
  }
}
