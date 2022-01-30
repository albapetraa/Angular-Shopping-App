import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }

  loggedIn = false;

  login(user: User): boolean {
    if (user.userName == "emre" && user.userPass == "12345") {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      return true;
    }
    else {
      return false;
    }
  }

  isLoggedIn() {
    return this.loggedIn;
  }
  logOut() {
    localStorage.removeItem("isLoggedIn");
    this.loggedIn = false;
  }

}
