import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { RouterModule } from "@angular/router";
import { CovalentLayoutModule } from "@covalent/core/layout";
import { CovalentStepsModule } from "@covalent/core/steps";
import { CovalentHighlightModule } from "@covalent/highlight";
import { CommonMaterialModule } from "../common-material/common-material.module";

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    CommonMaterialModule,
  ],
})
export class LayoutModule { }
