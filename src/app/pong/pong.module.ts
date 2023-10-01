import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { PongComponent } from './pong.component';
import { PongRoutingModule } from './pong-routing.module';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    PongComponent
  ],
  imports: [
    CommonModule,
    PongRoutingModule,
    FontAwesomeModule, AngularFullpageModule,
    AppModule
  ]
})
export class PongModule {
}
