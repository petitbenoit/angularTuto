import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { comparePasswordValidator, zipcodeValidator } from '../validators';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    name : new FormControl(null, [Validators.required, Validators.minLength(8)]),
    age : new FormControl(21, [Validators.required]),
    email: new FormControl(null, { 
      updateOn: 'change',
      validators: [Validators.required],
    }),
    address : new FormGroup({
      city: new FormControl(),
      zipcode: new FormControl(null, [Validators.required, zipcodeValidator])
    }),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [
      comparePasswordValidator('password') // name of the control
    ])
  },
  { 
    updateOn: 'submit'
  });

  constructor() { }

  ngOnInit(): void {

    const data = { 
      name: 'test',
      age : 12,
      email : 'test@mail.com'
    };

    // this.userForm.setValue(data);
    this.userForm.patchValue(data);
  }

  saveData() {
    console.log(this.userForm.value);
  }
}
