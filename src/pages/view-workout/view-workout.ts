import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddExercisePage } from '../add-exercise/add-exercise';
import { EnterDataPage } from '../enter-data/enter-data';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-view-workout',
  templateUrl: 'view-workout.html',
})
export class ViewWorkoutPage {

  workoutData: any;
  exerciseNameList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('workoutName').then((data) => {
      this.workoutData = this.navParams.data;
    })
    this.storage.get('exerciseName').then((result) => {
      this.exerciseNameList = result;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewWorkoutPage');
  }

  addExercise(name){
    this.navCtrl.push(AddExercisePage, name);
  }

  addWorkoutData(id){
    this.navCtrl.push(EnterDataPage, id);
  }

}
