import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggedinpage',
  templateUrl: './loggedinpage.component.html',
  styleUrls: ['./loggedinpage.component.scss']
})
export class LoggedinpageComponent implements OnInit {

  profile: number = 1;
  report: number = 0;
  finance: number = 0;
  about: number = 0;
  username: string = '';

  constructor(private router: Router,private localStorage: LocalService) { }

  ngOnInit(): void {
    if(this.localStorage.getData('username') == null)
    this.router.navigate(['/']);
  }

  activate(p: string) {
    if(p == 'profile') {
      this.report = 0;
      this.profile = 1;
      this.finance = 0;
      this.about = 0;
    }
    if(p == 'report') {
      this.report = 1;
      this.profile = 0;
      this.finance = 0;
      this.about = 0;
    }

    if(p == 'finance') {
      this.report = 0;
      this.profile = 0;
      this.finance = 1;
      this.about = 0;
    }
    if(p == 'about') {
      this.report = 0;
      this.profile = 0;
      this.finance = 0;
      this.about = 1;
    }
  }
  logout() {
    this.localStorage.clearData();
    this.router.navigate(['/']);
  }
}
