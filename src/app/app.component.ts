import { Component } from "@angular/core";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export interface Section {
  name: string;
  updated: Date;
}

export interface Question {
  questionId:number;
  questionName: string;
  questionChoice: string[];
  //index of choices
  questionAnswer: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({ transform: 'translateX(0)' })),
  //     transition('void => *', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate(3000)
  //     ]),
  //     transition('* => void', [
  //       animate(3000, style({ transform: 'translateX(100%)' }))
  //     ])
  //   ])
  // ]
})
export class AppComponent {
  title = "app";
  hide = true;
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ["assets/carousel1.jpg", "assets/carousel2.jpg", "assets/carousel3.jpg"];
  // left menu
  folders: Section[] = [
    {
      name: "Photos",
      updated: new Date("1/1/16"),
    },
    {
      name: "Recipes",
      updated: new Date("1/17/16"),
    },
    {
      name: "Work",
      updated: new Date("1/28/16"),
    },
  ];
  notes: Section[] = [
    {
      name: "Vacation Itinerary",
      updated: new Date("2/20/16"),
    },
    {
      name: "Kitchen Remodel",
      updated: new Date("1/18/16"),
    },
  ];

  questions: Question[] = [
    {
      questionId:1,
      questionName: "question a poser no 1",
      questionChoice: ["responseA", "responseB", "reponseC"],
      //index of choices
      questionAnswer: 0,
    },
    {
      questionId:2,
      questionName: "question a poser no 2",
      questionChoice: ["response1", "response2", "reponse3"],
      //index of choices
      questionAnswer: 0,
    },
    {
      questionId:3,
      questionName: "question a poser no 3",
      questionChoice: ["responseNo", "responseBetween", "reponseYes"],
      //index of choices
      questionAnswer: 0,
    },
  ];

  onValueQuestionChange(event:string,question:Question):void{
    //this.questions = this.questions.filter(e => e.questionId !== 1);
    console.log(event);
    question.questionAnswer=+event;
  }
}
