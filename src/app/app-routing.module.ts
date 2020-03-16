import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";

const appUrls: { [key: string]: string } = {
  dashboard: 'dashboard'
};

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: appUrls.dashboard },
  { path: appUrls.dashboard  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
