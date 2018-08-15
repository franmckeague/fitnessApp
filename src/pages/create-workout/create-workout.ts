import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-workout',
  templateUrl: 'create-workout.html'
})
export class CreateWorkoutPage {
  
  saveWorkoutButton: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alert: AlertController) {
    this.storage.get('workoutName').then((data) => {
      console.log('data: ' + data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateWorkoutPage');
  }

  save(value){
    console.log('data added: ' + value);
    this.storage.get('workoutName').then((data) => {
      if (data != null){
        data.push(value);
        this.storage.set('workoutName', data);
      }
      else {
        let array = [];
        array.push(value);
        this.storage.set('workoutName', array);
      }
    })

    let alert = this.alert.create({
      title: 'Workout Saved',
      subTitle: 'The workout has been saved and can be found in the "Workouts" tab',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
