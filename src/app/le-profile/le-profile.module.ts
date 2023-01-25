import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LeProfileComponent} from './le-profile.component';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ContactComponent} from './contact/contact.component';
import {ProfileComponent} from './profile/profile.component';
import {ProjectsComponent} from './projects/projects.component';
import {LeProfileRoutingModule} from './le-profile-routing.module';
import {SharedModule} from "../shared/shared.module";
import {NnComponent} from "./nn/nn.component";


@NgModule({
  declarations: [
    LeProfileComponent,
    ProfileComponent, ProjectsComponent, ContactComponent, NnComponent, ProfileComponent
  ],
  exports: [
    ProfileComponent,
    LeProfileComponent
  ],

  imports: [
    CommonModule, AngularFullpageModule, FontAwesomeModule, LeProfileRoutingModule, SharedModule
  ]
})
export class LeProfileModule {

}
