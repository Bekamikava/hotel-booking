import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LocationComponent } from './location/location.component';
import { DetailsComponent } from './details/details.component';
import { BookingComponent } from './booking/booking.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"hotels",component:HotelsComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"location",component:LocationComponent},
{
    path: "details/:id",
    component: DetailsComponent,
    data: {
      renderMode: 'default'
    }
  },  {path:"booking/:id",component:BookingComponent},
  {path:"cart",component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
