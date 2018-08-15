import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewExercisePage } from '../view-exercise/view-exercise';

@IonicPage()
@Component({
  selector: 'page-shoulders',
  templateUrl: 'shoulders.html',
})
export class ShouldersPage {

  exerciseInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.exerciseInfo = this.navParams.data;
  }

  viewData(item): void{
    console.log(item);
    this.navCtrl.push(ViewExercisePage, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShouldersPage');
  }

}
