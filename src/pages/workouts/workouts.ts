import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewWorkoutPage } from '../view-workout/view-workout';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage {

  workouts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('workoutName').then((data) => {
      this.workouts = data;
    })
  }

  getWorkoutID(id){
    this.navCtrl.push(ViewWorkoutPage, id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');
  }

}
