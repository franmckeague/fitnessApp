import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExercisesProvider {
  exercises: any;

  constructor(public http: HttpClient) {
    this.exercises = [
      {
        name: 'Shoulders',
        subName: [
          {ex: 'Arnold Dumbbell Press'}, 
          {ex: 'Behind The Neck Barbell Press'}, 
          {ex: 'Cable Face Pull'},
          {ex: 'Front Dumbbell Raise'},
          {ex: 'Lateral Dumbell Raise'},
          {ex: 'Overhead Press'},
          {ex: 'Push Press'},
          {ex: 'Rear Delt Dumbbell Raise'},
          {ex: 'Seated Dumbbell Raise'},
          {ex: 'Seated Dumbbell Press'},
          {ex: 'Smith Machine Overhead Press'}
        ] 
      }, 
      {
        name: 'Triceps',
        subName: [
          {ex: 'Cable Overhead Triceps Extension'}, 
          {ex: 'Close Grip Barbell Bench Press'}, 
          {ex: 'Dumbbell Overhead Triceps Extension'},
          {ex: 'EZ-Bar Skullcrusher'},
          {ex: 'Lying Triceps Extension'},
          {ex: 'Parallel Bar Triceps Dip'},
          {ex: 'Rope Push Down'},
          {ex: 'V-Bar Push Down'}
        ]
      },
      {
        name: 'Biceps',
        subName: [
          {ex: 'Barbell Curl'}, 
          {ex: 'Cable Curl'}, 
          {ex: 'Dumbbell Concentration Curl'},
          {ex: 'Dumbbell Curl'},
          {ex: 'Dumbbell Hammer Curl'},
          {ex: 'Dumbbell Preacher Curl'},
          {ex: 'EZ-Bar Curl'},
          {ex: 'EZ-Bar Preacher Curl'}
        ]
      },
      {
        name: 'Chest',
        subName: [
          {ex: 'Cable Crossover'}, 
          {ex: 'Decline Barbell Bench Press'}, 
          {ex: 'Decline Dumbbell Bench Press'},
          {ex: 'Flat Barbell Bench Press'},
          {ex: 'Flat Dumbbell Fly'},
          {ex: 'Incline Barbell Bench Press'},
          {ex: 'Incline Dumbbell Bench Press'},
          {ex: 'Incline Dumbbell Fly'}
        ]
      },
      {
        name: 'Back',
        subName: [
          {ex: 'Barbell Row'}, 
          {ex: 'Barbell Shrug'}, 
          {ex: 'Deadlift'},
          {ex: 'Dumbbell Row'},
          {ex: 'Lat Pulldown'},
          {ex: 'Machine Shrug'},
          {ex: 'Seated Cable Row'}
        ]
      },
      {
        name: 'Legs',
        subName: [
          {ex: 'Barbell Calf Raise'}, 
          {ex: 'Barbell Front Squat'}, 
          {ex: 'Barbell Squat'},
          {ex: 'Donkey Calf Raise'},
          {ex: 'Glute-Ham Raise'},
          {ex: 'Leg Extension Machine'},
          {ex: 'Leg Press'},
          {ex: 'Lying Leg Curl Machine'},
          {ex: 'Romanian Deadlift'},
          {ex: 'Seated Calf Raise Machine'},
          {ex: 'Seated Leg Curl Machine'},
          {ex: 'Standing Calf Raise Machine'}
        ]
      },
      {
        name: 'Abs',
        subName: [
          {ex: 'Ab-Wheel Rollout'}, 
          {ex: 'Crunch'}, 
          {ex: 'Hanging Knee Raise'},
          {ex: 'Hanging Leg Raise'},
          {ex: 'Plank'},
          {ex: 'Side Plank'},
          {ex: 'Sit-Ups'}
        ]
      }
    ];

  }

  loadAll(){
    return Promise.resolve(this.exercises);
  }

}
