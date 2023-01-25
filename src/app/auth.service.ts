import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  register(): Promise<any> {
    return new Promise((resolve) =>{
      localStorage.setItem('loggedIn', 'true');
      resolve(true);
    })
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedIn');
  }
}
