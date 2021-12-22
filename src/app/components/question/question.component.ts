import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'app/services/question.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: any[] = [];
  dutips: any[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.onGetQuestions()
    this.onGetDutips()
  }

  onGetQuestions(){
    this.questionService.getQuestions().subscribe(resp => {
      console.log(resp);
      this.questions = resp;
    });
  }

  onGetDutips(){
    this.questionService.getDutips().subscribe(resp => {
      console.log(resp);
      this.dutips = resp;
    });
  }
}
