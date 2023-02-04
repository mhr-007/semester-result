import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Output()
  onVolumeChange: EventEmitter<Event> = new EventEmitter<Event>();

  @Input()
  showVolumeConfig$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showSettings$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() { }

  ngOnInit(): void {
  }

}
