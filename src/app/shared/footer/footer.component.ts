import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  data: Date = new Date();

  date: { year: number, month: number };
  model: NgbDateStruct;

  constructor() { }

  ngOnInit(): void {
  }

}
