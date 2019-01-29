import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatsPage } from './whats';

@NgModule({
  declarations: [
    WhatsPage,
  ],
  imports: [
    IonicPageModule.forChild(WhatsPage),
  ],
})
export class WhatsPageModule {}
