import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundTestComponent } from './sound-test.component';

describe('SoundTestComponent', () => {
  let component: SoundTestComponent;
  let fixture: ComponentFixture<SoundTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
