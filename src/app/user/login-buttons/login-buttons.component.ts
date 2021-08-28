import { userStatusSelector } from './../_store/user.selectors';
import { clearUserSession } from './../_store/user.actions';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreType } from 'src/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.css']
})
export class LoginButtonsComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  
  constructor(private store: Store<StoreType>, private router: Router) { 
    this.isLoggedIn$ = this.store.select(userStatusSelector);
  }

  ngOnInit(): void {}

  signOut() {
    this.store.dispatch(clearUserSession());
    this.router.navigate(['/']);
  }
}
