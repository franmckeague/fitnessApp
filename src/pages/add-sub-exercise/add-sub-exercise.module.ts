import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSubExercisePage } from './add-sub-exercise';

@NgModule({
  declarations: [
    AddSubExercisePage,
  ],
  imports: [
    IonicPageModule.forChild(AddSubExercisePage),
  ],
})
export class AddSubExercisePageModule {}
