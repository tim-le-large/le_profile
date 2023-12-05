import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NnComponent } from './nn/nn.component';
import { IconComponent } from './icon/icon.component';
import { ProjectsComponent } from './projects/projects.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';
import { CardgridComponent } from './cardgrid/cardgrid.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent, ProfileComponent, NavigationComponent, NnComponent, IconComponent, ProjectsComponent, ContactComponent, CardgridComponent],

  imports: [
    BrowserModule, AppRoutingModule, CommonModule, AngularFullpageModule, FontAwesomeModule
  ],


  providers: [],
  exports: [
    AppComponent, NavigationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
