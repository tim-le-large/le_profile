import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LeProfileComponent} from './le-profile.component';


const routes: Routes = [{path: '', component: LeProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeProfileRoutingModule {
}
