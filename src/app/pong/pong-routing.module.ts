import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PongComponent } from './pong.component';

const routes: Routes = [{ path: '', component: PongComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PongRoutingModule { }
