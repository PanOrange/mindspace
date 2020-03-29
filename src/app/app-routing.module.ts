import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/components/dashboard/dashboard.component";
import { BaseLayoutComponent } from "./layout/base-layout/base-layout.component";
import { Url } from "./shared/enums/url.enum";

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: Url.DASHBOARD },
      { path: Url.DASHBOARD, component: DashboardComponent },
      { path: Url.ANGULAR, loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
