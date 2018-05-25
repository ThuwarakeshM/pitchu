import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavHubPage } from './nav-hub';

@NgModule({
  declarations: [
    NavHubPage,
  ],
  imports: [
    IonicPageModule.forChild(NavHubPage),
  ],
})
export class NavHubPageModule {}
