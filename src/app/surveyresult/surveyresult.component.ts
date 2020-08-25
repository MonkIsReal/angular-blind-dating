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
      description:"Sorry but you have the worse profile of all. You need to put women out of their pedestals. Some rules should be applied to you, like never pay women for free. In your case you should do massive approaches on woman and be more sexual.",
      url:"assets/simp.png"
    },
    {
      name: "Nice guy",
      description: "The nice guy is often friend with women but he never settle down with them. When women says LJBF, she's never meant it. You should understand that she meant that you are not authentic and you're flat. Advice: tell her that she's wrong when necessery and have more boundaries.",
      url:"assets/niceguy.jpg"
    },
    {
      name: "Apha",
      description: "Handsome boy.., guess that your sexual life is easy and you had a lot of partners. Unfortunately you have a great chance to loose the ability to pair bond and settle down with a women. If you want to have children you should fix your sexual addiction, and stop to flirting with random women that does not want to settle down.",
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
