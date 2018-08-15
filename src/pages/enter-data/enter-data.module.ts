import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnterDataPage } from './enter-data';

@NgModule({
  declarations: [
    EnterDataPage,
  ],
  imports: [
    IonicPageModule.forChild(EnterDataPage),
  ],
})
export class EnterDataPageModule {}
