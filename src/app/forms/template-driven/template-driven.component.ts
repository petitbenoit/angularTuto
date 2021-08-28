import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit, AfterViewInit {
  @ViewChild('userForm') formObj!: NgForm;
  constructor() { }
 
  ngOnInit(): void {
    console.log(this.formObj);
    // this.loadData(this.formObj);
  }

  ngAfterViewInit() {
    console.log('VIEW INIT', this.formObj);
    // this.loadData(this.formObj);
  }

  saveData(formObj: NgForm) {
    // send data to the server
    console.log('FORM SUBMITTED', formObj);
    if (formObj.valid) {
      console.log('ACTUAL LOGIC', formObj.value);
    }
    
  }

  loadData(formObj: NgForm) {
    const data = {
      name: 'test',
      age : 21
    }
    formObj.form.setValue(data); // complete data
    formObj.form.markAllAsTouched(); // handle the touch event logically
  }

  patchData(formObj: NgForm) {
    const data = {
      name: 'demo',
    }
    formObj.form.patchValue(data); // partial data
  }
}
