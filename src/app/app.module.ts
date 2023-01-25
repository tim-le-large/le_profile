import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LeDashboardModule} from './le-dashboard/le-dashboard.module';
import {LeProfileModule} from './le-profile/le-profile.module';
import {LeHomeModule} from './le-home/le-home.module';
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    LeProfileModule,
    LeDashboardModule,
    LeHomeModule,
    SharedModule
  ],

  
  providers: [],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
