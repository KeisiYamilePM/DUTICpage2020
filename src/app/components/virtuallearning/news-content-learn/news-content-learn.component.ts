import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-content-learn',
  templateUrl: './news-content-learn.component.html',
  styleUrls: ['./news-content-learn.component.css']
})
export class NewsContentLearnComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
