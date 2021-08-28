import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  emps = [
    { id: 100, name: "A" },
    { id: 101, name: "B" },
    { id: 102, name: "C" },
  ];
  
  constructor() { }

  trackById = (index: number, emp: any) => emp.id;

  ngOnInit(): void {
  }

  refreshData() {
    this.emps = [
      { id: 100, name: "Alpha" },
      { id: 101, name: "B" },
      { id: 102, name: "C" },
      { id: 103, name: "D" },
    ];
  }
}
