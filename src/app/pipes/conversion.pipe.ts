import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion',
  // pure: false // impure
})
export class ConversionPipe implements PipeTransform {
  // value | conversion : arg1
  transform(value: number, code: string) {
    console.log('PIPE CALLED');
    if(isNaN(value)) return null;
     return this.convertValue(value, code);

  }

  convertValue(value: number, code: string) {
    switch(code) {
      case 'USD': 
        return value * 0.023;    
      case 'EUR': 
        return value * 0.02; 
      case 'GBP': 
        return value * 0.017; 
      case 'CAD': 
        return value * 0.03; 
      case 'INR': 
        return value * 1.74; 
      default: 
        return value;
    }
  }

}
