import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LeHomeComponent} from './le-home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {LeProfileModule} from "../le-profile/le-profile.module";
import {LeHomeRoutingModule} from "./le-home-routing.module";


@NgModule({
  declarations: [
    LeHomeComponent
  ],
  imports: [
    CommonModule, LeHomeRoutingModule,
    FontAwesomeModule, AngularFullpageModule, LeProfileModule
  ]
})
export class LeHomeModule {
}
