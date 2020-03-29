import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularBaseComponent } from "./angular-base/angular-base.component";

const routes: Routes = [
  { path: '', component: AngularBaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {
  
}
