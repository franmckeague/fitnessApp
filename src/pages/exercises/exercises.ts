import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExercisesProvider } from '../../providers/exercises/exercises';
import { ShouldersPage } from '../shoulders/shoulders';

@IonicPage()
@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html',
})
export class ExercisesPage {

  exerciseList: any;
  ShoudlersButton: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public exercises: ExercisesProvider) {
    this.exercises.loadAll().then(result => {
      this.exerciseList = result;
      this.ShoudlersButton = ShouldersPage;
    });
  }

  exerciseClicked(item): void{
    console.log(item);
    this.navCtrl.push(ShouldersPage, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisesPage');
  }

}
