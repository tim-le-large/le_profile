import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeDashboardComponent } from './le-dashboard/le-dashboard.component';
import { LeProfileComponent } from './le-profile/le-profile.component';

const routes: Routes = [
  { path: 'dashboard', component: LeDashboardComponent },
  { path: '', component: LeProfileComponent },
  { path: 'profile', component: LeProfileComponent },]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
