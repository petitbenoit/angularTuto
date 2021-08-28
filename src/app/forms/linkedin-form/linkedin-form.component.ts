import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linkedin-form',
  templateUrl: './linkedin-form.component.html',
  styleUrls: ['./linkedin-form.component.css']
})
export class LinkedinFormComponent implements OnInit {

  linkedInForm : FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    experience: new FormArray([this.newExperience()])
  });

  constructor() { }

  get experienceObj(): FormArray {
    return this.linkedInForm.get('experience') as FormArray;
  }

  newExperience(): FormGroup {
    return new FormGroup({
      company: new FormControl(null, [Validators.required]),
      designation: new FormControl(null, [Validators.required]),
      yrs: new FormControl(null, [Validators.required])
    });
  }

  addExperience() {
    this.experienceObj.push(this.newExperience());
  }

  removeExperience(index: number) {
    this.experienceObj.removeAt(index);
  }

  ngOnInit(): void {
  }

}
