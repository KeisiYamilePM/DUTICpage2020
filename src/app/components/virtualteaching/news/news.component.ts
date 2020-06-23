import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  content: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsList();
  }

  newsList() {
    this.content = this.newsService.getNews()
  }

  openInfoNew(data) {
    console.log(data)
    Swal.fire({
      html: `
      <div class="row">
        <div class="col-12 col-lg-6 col-md-6 col-sm-12">
          <img src="${data.img}" class="card-img-top" alt="...">
        </div>
        <div class="col-12 col-lg-6 col-md-6 col-sm-12">
          <h5 class="card-title"><strong>${data.name}</strong></h5>
          <hr>
          <p class="card-text text-justify">${data.des}</p>
          <hr>
          <a href="${data.link}" target="_blank" class="btn btn-primary btn-block">Ver más</a>
        </div>
      </div>
      `,
      showConfirmButton: false,
      width: 900,
    })
  }
}
