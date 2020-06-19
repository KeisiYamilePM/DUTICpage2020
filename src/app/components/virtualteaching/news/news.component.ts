import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';

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

  styleCards(event) {
    var zindex = 10;

    $("div.card").click(function() {

      var isShowing = false;

      if ($(event.target).hasClass("show")) {
        isShowing = true
      }

      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show").removeClass("show");

        if (isShowing) {
          // event.target card was showing - reset the grid
          $("div.cards").removeClass("showing");
        } else {
          // event.target card isn't showing - get in with it
          $(event.target).css({ zIndex: zindex }).addClass("show");
        }
        zindex++;

      } else {
        // no cards in view
        $("div.cards").addClass("showing");
        $(event.target).css({ zIndex: zindex }).addClass("show");
        zindex++;
      }
    });
  }
}
