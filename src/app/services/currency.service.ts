import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private _code: string = 'MUR';
  private currencySubject = new BehaviorSubject<string>(this._code);
  currencyObservable: Observable<string>; // get the currency code

  constructor() {
    this.currencyObservable = this.currencySubject.asObservable();
  }

  // to change the currency
  updateCurrency(code: string) {
    this._code = code;
    // publishing the data changes
    this.currencySubject.next(this._code);
  }
}

