import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddSubExercisePage } from '../add-sub-exercise/add-sub-exercise';
import { ExercisesProvider } from '../../providers/exercises/exercises';


@IonicPage()
@Component({
  selector: 'page-add-exercise',
  templateUrl: 'add-exercise.html',
})
export class AddExercisePage {

  bodyPartList: any;
  addInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public exercises: ExercisesProvider) {
    this.addInfo = this.navParams.data;
    this.exercises.loadAll().then(result => {
      this.bodyPartList = result;
    });

  }

  bodyPartClicked(id){
    console.log('item ' + id);
    this.navCtrl.push(AddSubExercisePage, id);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddExercisePage');
  }
}
