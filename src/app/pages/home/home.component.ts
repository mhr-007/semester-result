import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as loginDetail from './login'
import { LocalService } from '../../local.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private localStore: LocalService) {
    this.username = '';
    this.password = '';
   }

  ngOnInit(): void {
  }

  loginUser() {
    const loginDetails: any = loginDetail.login;
    if(loginDetails[this.username] !== null && loginDetails[this.username] === this.password) {
      this.localStore.saveData('username', this.username);
      this.router.navigate(['/login']);
    }
  }

}
