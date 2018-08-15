import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-enter-data',
  templateUrl: 'enter-data.html',
})
export class EnterDataPage {

  enterData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alert: AlertController) {
    this.enterData = this.navParams.data;
    
   this.storage.get('set').then((setData) => {
    console.log('Set Data: ' + setData);
  });
  this.storage.get('weight').then((weightData) => {
    console.log('Weight Data: ' + weightData);
  });
  this.storage.get('reps').then((repsData) => {
    console.log('Reps Data: ' + repsData);
  })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterDataPage');
  }

  saveSet(set){
    this.storage.get('set').then((setData) => {
      if (setData != null){
        setData.push(set);
        this.storage.set('set', setData);
      }
      else {
        let array = [];
        array.push(set);
        this.storage.set('set', array);
      }
    })
  }

  saveWeight(weight){
    this.storage.get('weight').then((weightData) => {
      if (weightData != null){
        weightData.push(weight);
        this.storage.set('weight', weightData);
      }
      else {
        let array = [];
        array.push(weight);
        this.storage.set('weight', array);
      }
    })
  }

  saveReps(reps){
    this.storage.get('reps').then((repData) => {
      if (repData != null){
        repData.push(reps);
        this.storage.set('reps', repData);
      }
      else {
        let array = [];
        array.push(reps);
        this.storage.set('reps', array);
      }
    })
    let alert = this.alert.create({
      title: 'Workout Data Saved',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
