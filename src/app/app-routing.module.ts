import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PongComponent } from './pong/pong.component';


const routes: Routes = [
  { path: 'pong', component: PongComponent },
  { path: '', component: AppComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
