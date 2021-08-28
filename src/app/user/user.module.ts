import { userReducer } from './_store/user.reducer';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { LoginButtonsComponent } from './login-buttons/login-buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LoginButtonsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('user', userReducer), // value to pass is user, value come from the userReducer // implemented as feature
  ],
  exports: [
    LoginComponent, 
    LoginButtonsComponent
  ]
})
export class UserModule { }
