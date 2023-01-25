import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LeDashboardRoutingModule} from './le-dashboard-routing.module';
import {LeDashboardComponent} from './le-dashboard.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LeDashboardComponent,
  ],
  imports: [
    CommonModule,
    LeDashboardRoutingModule,
    FontAwesomeModule, AngularFullpageModule, SharedModule
  ]
})
export class LeDashboardModule {
}
