import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http:HttpClient) { }

protected getallhotels:string = "https://hotelbooking.stepprojects.ge/api/Hotels/GetAll";
protected getallhotelsid1:string = "https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel";
protected getallhotelsid2:string = "https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/2";
protected getallhotelsid3:string = "https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/3";
protected getroomsid:string = "https://hotelbooking.stepprojects.ge/api/Rooms/GetAll";
protected postToBasket:string = "https://hotelbooking.stepprojects.ge/api/Booking";
protected Booking:string = "https://hotelbooking.stepprojects.ge/api/Booking";
protected delete:string = "https://hotelbooking.stepprojects.ge/api/Booking";
protected allRooms:string = "https://hotelbooking.stepprojects.ge/api/Rooms/GetAll";
public apiUrl: string = 'https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered';





 getAllCategory(){

    return this.http.get(this.getallhotels);



 }
 getallhotelsid(id:any){
  return  this.http.get(`${this.getallhotelsid1}/${id}`);

}
getallroomsid(id:any){
return this.http.get(`${this.getroomsid}`);

}
getPostProduct(product:any){
  return this.http.post(this.postToBasket,product);
}
BookedRooms(){
return this.http.get(this.Booking);

}
deleteid(id:any){
   return this.http.delete(`${this.delete}/${id}`)
}
allRoomsfilter(){
   return this.http.get(this.allRooms);
}

// protected filterRooms(filterData: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, filterData);
//   }
// filterRooms(filterData: any): Observable<any> {
//   return this.http.post<any>(this.apiUrl, filterData);
// }
 filterRooms(filterData: any): Observable<any> {
  return this.http.post<any>(this.apiUrl, filterData);
}












  

  












}