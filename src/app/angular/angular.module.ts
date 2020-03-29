import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularBaseComponent } from './components/angular-base/angular-base.component';
import { AngularRoutingModule } from "./components/angular-routing.module";

@NgModule({
  declarations: [AngularBaseComponent],
  imports: [
    CommonModule,
    AngularRoutingModule,
  ]
})
export class AngularModule { }
