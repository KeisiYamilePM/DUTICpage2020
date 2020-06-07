import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  content:any[]=[];

  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.newsList();
  }

  newsList(){
    this.content = this.newsService.getNews()
  }
}
