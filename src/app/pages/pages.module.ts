import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import {HomeComponent} from "./home/home.component";
import { MockComponent } from './mock/mock.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { ProfileComponent } from './profile/profile.component';
import { LoggedinpageComponent } from './loggedinpage/loggedinpage.component';
import { FinanceComponent } from './finance/finance.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    MockComponent,
    ResultComponent,
    ProfileComponent,
    LoggedinpageComponent,
    FinanceComponent,
    AboutComponent,
  ],
  imports: [
    PagesRoutingModule,
    FormsModule,
    SharedModule,
    CommonModule
  ],
  providers: []
})
export class PagesModule { }
