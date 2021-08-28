import { CurrencyService } from './../../services/currency.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencyCodes : string[] = ['INR', 'USD', 'GBP', 'EUR', 'CAD', 'MUR'];
  @Output() selected = new EventEmitter();

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
  }

  updateCurrency(event: Event) {
    const ele = event.target as HTMLSelectElement;

   //  this.selected.emit(ele.value);
   this.currencyService.updateCurrency(ele.value);
  }
}
