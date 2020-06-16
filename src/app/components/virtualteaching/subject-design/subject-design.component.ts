import { Component, OnInit } from '@angular/core';
import { SubjectDesignService } from '../../../services/subject-design.service';

@Component({
  selector: 'app-subject-design',
  templateUrl: './subject-design.component.html',
  styleUrls: ['./subject-design.component.css']
})
export class SubjectDesignComponent implements OnInit {

  content:any[]=[];

  constructor(private strategiesService: SubjectDesignService) { }

  ngOnInit(): void {
    this.strategiesList()
  }

  
  strategiesList(){
    this.content = this.strategiesService.getStrategies()
  }
}
