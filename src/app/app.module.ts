import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from "@covalent/core/steps";
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
// import { CovalentBaseEchartsModule } from '@covalent/echarts/base';

// import { CovalentMediaModule } from '@covalent/core/media';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularModule } from "./angular/angular.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // CovalentLayoutModule,
    // CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    // CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    // CovalentBaseEchartsModule,
    AngularModule,
    LayoutModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
