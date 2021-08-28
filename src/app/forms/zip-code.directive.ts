import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { zipcodeValidator } from './validators';

@Directive({
  selector: '[appZipCode]',
  providers: [
    // Dependency injection pattern angular DI : interface, implementation for the interface
    { provide: NG_VALIDATORS, useValue: zipcodeValidator, multi: true },
  ]
})
export class ZipCodeDirective {

  constructor() { }

}
