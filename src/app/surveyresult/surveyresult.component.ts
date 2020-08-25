import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute, Router } from '@angular/router';

export interface result {
  name: string;
  description: string;
  url: string;
}


@Component({
  selector: 'app-surveyresult',
  templateUrl: './surveyresult.component.html',
  styleUrls: ['./surveyresult.component.css']
})
export class SurveyresultComponent implements OnInit {

  profiles: result[] = [
    {
      name: "Simp",
      description:"sorry you have the worse profile of all. you need to put women out of their pedestal. some rules should be applies like never pay women for free. in your case you should massive approach woman and be sexual",
      url:"assets/simp.png"
    },
    {
      name: "Nice guy",
      description: "the nice guy is often friend with women but never settle down. when women says LJBF, she's never mean it. you should understand that she means you are not authentic and you're flat. advice: tell her that she's wrong when you think that sh's wrong",
      url:"assets/niceguy.jpg"
    },
    {
      name: "Apha",
      description: "Handsome boy.., guess that your sexual life is easy and you had a lot of partner. unfortunately you have a great chance to loose the ability to pair bond and settle down with a women. if you want to have children you should fix your sexual addiction, and stop to flirt with women that does not want to settle down",
      url:"assets/handsome.jpg"
    },
  ];

    index:number=1;
  constructor(private route:ActivatedRoute,private router:Router) { }


  ngOnInit() {
    let score =+ this.route.snapshot.paramMap.get("score");

    if(score<3) {
      this.index=0;
    }
    if(score>8) {
      this.index=2;
    }
  }




}
