import { Component, OnInit, Input } from '@angular/core';
import * as resultData from './result';
import { LocalService } from '../../local.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {


  options = [
    { value: '112', label: 'Fall 2022 (July - December)', selected: true },
    { value: '106', label: 'Spring 2022 (January - June)' },
    { value: '103', label: 'Fall 2021 (July - December)' },
    { value: '101', label: 'Spring 2021 (January - June)' },
    { value: '90', label: 'Spring 2020 (January - June)' },
    { value: '87', label: 'Fall 2019 (July - December)' },
    { value: '82', label: 'Spring 2019 (January - June)' },
    { value: '79', label: 'Fall 2018 (July - December)' }
  ];

  selectedOption = this.options.find(o => o.selected);

  selectItem: any = this.options.find(o => o.selected);

  studentInfo: any = [];

  courses : any = []

  constructor(private localStore: LocalService) {

  }

  ngOnInit(): void {
    let username = this.localStore.getData('username');
    let resData: any = resultData.data;
    this.studentInfo = resData[username].info;
    this.courses = resData[username][this.selectItem.value].courses;
  }

  onSelectionChange(event: any) {
    let username = this.localStore.getData('username');
    this.selectItem = this.options.find(o => o.value === event)
    let resData: any = resultData.data;
    this.courses = resData[username][this.selectItem.value]?.courses;
  }

  getTotalCredit() {
    let totalCredit = 0;
    this.courses.forEach((c:any) => totalCredit += parseInt(c.creditHours));
    return totalCredit;
  }

  getSemesterGPA() {
    let gp = 0.0;
    this.courses.forEach((c:any) => gp += parseFloat(c.gp));
    return (gp / this.getTotalCredit()).toFixed(2);
  }

}
