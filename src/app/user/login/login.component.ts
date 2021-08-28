import { createUserSession } from './../_store/user.actions';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private authService : AuthService, 
    private router: Router, 
    private store: Store // inject store service to createuser session
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe((data) => {
        console.log('SUCCESS', data);
        // create session
        this.store.dispatch(createUserSession({ user: data })); // dispatch the action and use the devtool to assess the behaviour
        this.router.navigate(['/']);
      }, (error) => {
        console.log('FAILURE', error);
      })
    }
  }

}
