import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    const endPoint= `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`;
    const data = { email, password, returnSecureToken: true };
    return this.httpClient.post(endPoint, data);
  }
}
