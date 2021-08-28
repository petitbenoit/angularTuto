import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  
  // variable_name:data_type
  demoData: string = 'test data';
  constructor() { }

  ngOnInit(): void {
  }

  showAlert() {
    alert('hello from angular');
  }
}
