import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http:HttpClient) { }

protected getallhotels:string = "https://hotelbooking.stepprojects.ge/api/Hotels/GetAll";
protected getallhotelsid1:string = "https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel";
protected getallhotelsid2:string = "https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/2";
protected getallhotelsid3:string = "https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/3";
protected getroomsid:string = "https://hotelbooking.stepprojects.ge/api/Rooms/GetAll/1";



 getAllCategory(){

    return this.http.get(this.getallhotels);



 }
 getallhotelsid(id:any){
  return  this.http.get(`${this.getallhotelsid1}/${id}`);

}
getallroomsid(id:any){
return this.http.get(`${this.getroomsid}/${id}`);

}


































}