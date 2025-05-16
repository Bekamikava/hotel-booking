import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  id: any;
  products: any;

  constructor(private route: ActivatedRoute, private service: HttpService) {
    this.route.params.subscribe((el: any) => {
      this.id = el.id;

      this.service.getallhotelsid(this.id).subscribe((data: any) => {
        this.products = data;
        
      });
    });
  }
}
