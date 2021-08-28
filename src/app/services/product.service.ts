import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductType } from './../../types';
// is equivalent of registering in app.module.ts
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    const endPoint = `https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json`;
    return this.httpClient.get<ProductType[]>(endPoint);
  }
}
