import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { LoggedinpageComponent } from './loggedinpage/loggedinpage.component';
import {MockComponent} from "./mock/mock.component";
import {ResultComponent} from "./result/result.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoggedinpageComponent },
  { path: 'mock', component: MockComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
