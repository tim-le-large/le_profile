import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeDashboardComponent } from './le-dashboard.component';

const routes: Routes = [{ path: '', component: LeDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeDashboardRoutingModule { }
