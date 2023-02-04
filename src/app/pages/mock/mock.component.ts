import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";

const LISTENING = 'listening';

const DETAILS = 'details';
const SETTINGS = 'settings';
const INSTRUCTIONS = 'instructions';
const TEST = 'test';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {
  pendingDetailsCheck: boolean = true;
  testType: string = LISTENING;
  showVolumeConfig$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  volume$: BehaviorSubject<number> = new BehaviorSubject<number>(0.5);
  testPhase: string = DETAILS;

  constructor() { }

  ngOnInit(): void {
    this.pendingDetailsCheck = true;
  }

  onNextStep($event: any) {
    console.log(this.testPhase)
    switch (this.testPhase) {
      case DETAILS:
        this.testPhase = SETTINGS;
        break;
      case SETTINGS:
        this.testPhase = INSTRUCTIONS;
        break;
      case INSTRUCTIONS:
        this.testPhase = TEST;
        break;
      default:
        break;
    }
    if(this.testType === LISTENING) this.showVolumeConfig$.next(true);
    else this.showVolumeConfig$.next(false);
  }

  changeVolume($event: any) {
    this.volume$.next($event?.target?.value);
  }
}
