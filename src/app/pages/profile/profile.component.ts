import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as profileInfo from './profile-info';
import { LocalService } from '../../local.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: string = '';
  username: string = '';
  fname: string = '';
  mname: string = '';
  gender: string = '';
  faith: string = '';
  ethnicity: string = '';
  bdate: string = '';
  email: string = '';
  nid: string = '';
  constructor(private route: ActivatedRoute, private localStore: LocalService) { }

  ngOnInit(): void {
      let username = this.localStore.getData('username');
      let inf : any =  profileInfo.info;
      this.id = inf[username].id;
      this.username = inf[username].username;
      this.fname = inf[username].fname;
      this.mname = inf[username].mname;
      this.gender = inf[username].gender;
      this.faith = inf[username].faith;
      this.ethnicity = inf[username].ethnicity;
      this.bdate = inf[username].bdate;
      this.email = inf[username].email;
      this.nid = inf[username].nid;

  }

}
