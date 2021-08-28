import { CurrencyService } from './../../services/currency.service';
import { ProductService } from './../../services/product.service';
import { ProductType } from './../../../types';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() currentCurrency !: string;
  pList : ProductType[] = [];
//   pList: ProductType[] = [
//     {
//       productId: 1000,
//       productImage: 'https://www.seekpng.com/png/detail/392-3929552_free-download-logo-de-mouse-clipart-computer-mouse.pn',
//       productName: 'Mouse',
//       productPrice: 12999.789,
//       productStock: true
//     },
//     {
//       productId: 1001,
//       productImage: 'https://www.seekpng.com/png/detail/392-3929552_free-download-logo-de-mouse-clipart-computer-mouse.png',
//       productName: 'Mouse',
//       productPrice: 13999.456,
//       productStock: false
//     }
// ];
currentPage: number = 1;
currency$ !: Subscription;
currencyObs$ : Observable<string>;

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private currencyService: CurrencyService,
    private activeRoute: ActivatedRoute
    ) { 
      this.currencyObs$ = this.currencyService.currencyObservable; 
    }
  
  get startCount() {
    return (this.currentPage - 1) * 10;
  }

  get endCount() {
    return this.startCount + 10;

  }

  ngOnInit(): void {
    this.getData();
    this.getCode();
    this.getPageNo();
  }

  ngOnDestroy() {
    this.currency$.unsubscribe();
  }

  getPageNo() {
    this.activeRoute.queryParamMap.subscribe((params) => {
      if(params.has('page')) {
        this.currentPage = Number(params.get('page'));
      }
    })
  }
  
  getCode() {
    this.currency$ = this.currencyService.currencyObservable.subscribe(
      (code) => (this.currentCurrency = code)
      );
  }
  getData() {
    this.productService.getProducts().subscribe( 
      (data) => {
        console.log('success', data);
        this.pList = data;
      }, 
      (error) => {
        console.log('error', error);
      }
      );
  }

  addToCart(data: any) {
    console.log('ADD TO CART', data); // add to cart logic first
    this.router.navigate(['/cart'], { queryParams: { zipcode: 12345 } });  // navigate to cart 
  }

  addToWishlist(data: any){
    console.log("ADD TO WISHLIST", data);
  }
}
