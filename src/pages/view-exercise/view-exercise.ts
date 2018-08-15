import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-view-exercise',
  templateUrl: 'view-exercise.html',
})
export class ViewExercisePage {

  exerciseName: any;
  set: any;
  weight: any;
  reps: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.exerciseName = this.navParams.data;

    this.storage.get('set').then((setData) => {
      this.set = setData;
    });

    this.storage.get('weight').then((weightData) => {
      this.weight = weightData;
    });

    this.storage.get('reps').then((repsData) => {
      this.reps = repsData;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewExercisePage');
  }

}
