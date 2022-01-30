import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  model: User = new User();

  isOk = true;

  ngOnInit(): void {
  }

  login(ngForm: Form) {
    if (this.accountService.login(this.model)) {
      this.router.navigate(["products"]);
      this.isOk = true;
    }
    else {
      this.isOk = false;
    }
  }

}
