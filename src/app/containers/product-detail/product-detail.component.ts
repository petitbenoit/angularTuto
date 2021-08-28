import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // path params : /detail/100
    this.activeRoute.paramMap.subscribe((par) => {
      console.log('PID', par.get('pid'));
    })
    // query param : detail/1000?color=green

    this.activeRoute.queryParamMap.subscribe((par) => {
      if (par.has('color')) {
        console.log('COLOR', par.get('color'));
      }
    })
  }


}
