import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {SubSink} from "subsink";

@Component({
  selector: 'app-sound-test',
  templateUrl: './sound-test.component.html',
  styleUrls: ['./sound-test.component.scss']
})
export class SoundTestComponent implements OnInit, OnDestroy {
  private _subs = new SubSink();

  isPlaying = false;
  audio = new Audio();
  @Input() volume$: BehaviorSubject<number> = new BehaviorSubject<number>(0.5);

  @Output() onPlay: EventEmitter<any> = new EventEmitter<any>();
  @Output() onContinue: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.audio.src = '../../../../assets/audio/sample-audio.mp3'
  }

  ngOnDestroy(): void {
        this._subs.unsubscribe();
    }

  ngOnInit(): void {
    this._subs.sink = this.volume$.subscribe(volume => this.audio.volume = volume);
  }



  playSound($event: MouseEvent): void {
    if(this.isPlaying) {
      this.stopSound($event);
      return;
    }
    this.isPlaying = true;
    this.audio.currentTime = 0;
    this.audio.play();
    this.onPlay.emit($event);
  }

  private stopSound($event: MouseEvent): void {
    this.isPlaying = false;
    this.audio.pause();
  }

}
