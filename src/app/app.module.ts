import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExercisesPage} from '../pages/exercises/exercises';
import { CreateWorkoutPage} from '../pages/create-workout/create-workout';
import { ShouldersPage } from '../pages/shoulders/shoulders';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { ViewWorkoutPage } from '../pages/view-workout/view-workout';
import { AddExercisePage } from '../pages/add-exercise/add-exercise';
import { AddSubExercisePage } from '../pages/add-sub-exercise/add-sub-exercise';
import { EnterDataPage } from '../pages/enter-data/enter-data';
import { ViewExercisePage } from '../pages/view-exercise/view-exercise';


import { ExercisesProvider } from '../providers/exercises/exercises';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExercisesPage,
    CreateWorkoutPage,
    ShouldersPage,
    WorkoutsPage,
    ViewWorkoutPage,
    AddExercisePage,
    AddSubExercisePage,
    EnterDataPage,
    ViewExercisePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExercisesPage,
    CreateWorkoutPage,
    ShouldersPage,
    WorkoutsPage,
    ViewWorkoutPage,
    AddExercisePage,
    AddSubExercisePage,
    EnterDataPage,
    ViewExercisePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExercisesProvider
  ]
})
export class AppModule {}
