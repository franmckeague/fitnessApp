import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-sub-exercise',
  templateUrl: 'add-sub-exercise.html',
})
export class AddSubExercisePage {

  exerciseList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alert: AlertController) {
    this.exerciseList = this.navParams.data;
    this.storage.get('exerciseName').then((data) => {
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSubExercisePage');
  }

  addToWorkout(id){
    console.log(id.ex);
    this.storage.get('exerciseName').then((data) => {
      if (data != null){
        data.push(id.ex);
        this.storage.set('exerciseName', data);
      }
      else {
        let array = [];
        array.push(id.ex);
        this.storage.set('exerciseName', array);
      }
    });

    let alert = this.alert.create({
      title: 'Exercise Added',
      subTitle: id.ex + ' has been added to the workout',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
