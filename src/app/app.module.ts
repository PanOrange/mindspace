import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from "@covalent/core/steps";

// import { CovalentMediaModule } from '@covalent/core/media';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CovalentLayoutModule,
    CovalentStepsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
