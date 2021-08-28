import { ERROR_MESSAGES } from './error-messages';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {
  @Input() control : AbstractControl | NgModel | null = null; // template -> NgModel / model driven -> AbstractControl 
  constructor() { }
  // check whether theres a control, touched and has errors (double !! checks Object to true, undefined to false)
  get shouldShowErrors(): boolean {
    return !!this.control&&!!this.control.touched&&!!this.control.errors;
  }

  listOfErrors() : string[] {
    const errors: any = this.control?.errors; // errors object that we would have { minlength : {}}
    const errorKeys = Object.keys(errors); // [required, compare] // fetch keys only

    return errorKeys.map((key) => ERROR_MESSAGES[key](this.control?.getError(key))); 
    // return an array where [This field is required, Password mismatch]
  }

  ngOnInit(): void {
  }

}
