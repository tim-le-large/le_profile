import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LeHomeComponent} from "./le-home.component";

const routes: Routes = [{path: '', component: LeHomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeHomeRoutingModule {
}
