import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { ConfirmTestComponent } from './components/confirm-test/confirm-test.component';
import { SoundTestComponent } from './components/sound-test/sound-test.component';
import {CommonModule} from "@angular/common";
import { InstructionComponent } from './components/instruction/instruction.component';
import { ContentsComponent } from './components/contents/contents.component';


@NgModule({
    declarations: [
        BannerComponent,
        ConfirmTestComponent,
        SoundTestComponent,
        InstructionComponent,
        ContentsComponent
    ],
  imports: [
    CommonModule
  ],
    exports: [
        BannerComponent,
        ConfirmTestComponent,
        SoundTestComponent,
        InstructionComponent,
        ContentsComponent
    ],
    providers: []
})
export class SharedModule { }
