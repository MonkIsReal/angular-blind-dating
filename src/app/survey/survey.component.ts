import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Question {
  questionId:number;
  questionName: string;
  questionChoice: string[];
  //index of choices
  questionAnswer: number;
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  set1:Set<Question>;
  barProgress:number=0;
  questions: Question[] = [
    {
      questionId:1,
      questionName: "How long are you single?",
      questionChoice: ["> 1 year", "< 6 months","< 1 month" ],
      //index of choices
      questionAnswer: 0,
    },
    {
      questionId:2,
      questionName: "How much do you bring to the table on a date?",
      questionChoice: [">50 euros", "< 50 euro", "<20 euros"],
      //index of choices
      questionAnswer: 0,
    },
    {
      questionId:3,
      questionName: "Are you affraid of talking to girls",
      questionChoice: ["yes, a lot ", "sometimes", "no"],
      //index of choices
      questionAnswer: 0,
    },
    {
      questionId:4,
      questionName: "Does your opinions often offend girls? ",
      questionChoice: ["I try to please them ", "sometimes", "a lot"],
      //index of choices
      questionAnswer: 0,
    },
    {
      questionId:5,
      questionName: "How often girls hits on you ?",
      questionChoice: ["never ", "once a month", "I often end up in their appartment"],
      //index of choices
      questionAnswer: 0,
    },
  ];


  constructor(private router: Router) {

  }

  ngOnInit() {
    this.set1= new Set();

  }

  submitForm():void{
    let result=0;
    this.questions.forEach(element => result+=element.questionAnswer);
    this.router.navigate(['/user/surveyresult',result]);

  }

  onValueQuestionChange(event:string,question:Question):void{
    //this.questions = this.questions.filter(e => e.questionId !== 1);
    //console.log(event);
    question.questionAnswer=+event;
    this.set1.add(question);
    this.barProgress= this.set1.size * 2 *10
  }

}
