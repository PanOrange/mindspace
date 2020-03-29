import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentLayoutModule } from "@covalent/core/layout";
import { CovalentStepsModule } from "@covalent/core/steps";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from '@angular/material/icon';
import { CovalentHighlightModule } from "@covalent/highlight";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHighlightModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHighlightModule,
    MatIconModule,
    MatListModule,
  ]
})
export class CommonMaterialModule { }
