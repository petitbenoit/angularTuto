import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems = [
    { navLink: '', navText: 'Home' }, 
    { navLink: '/products', navText: 'products' },
    { navLink: '/login', navText: 'login' },
    { navLink: '/search', navText: 'Git Search' },
    { navLink: '/forms', navText: 'Forms' },
    { navLink: '/reports', navText: 'Reporting' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
