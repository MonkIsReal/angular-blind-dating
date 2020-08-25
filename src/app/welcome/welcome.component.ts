import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  images = ["assets/carousel1.jpg", "assets/carousel2.jpg", "assets/carousel3.jpg"];
  
  constructor() { }

  ngOnInit() {
  }

}
