import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getRepository(query: string) {
    const endPoint = `https://api.github.com/search/repositories?q=${query}`;
    return this.httpClient.get(endPoint);
  }
}
