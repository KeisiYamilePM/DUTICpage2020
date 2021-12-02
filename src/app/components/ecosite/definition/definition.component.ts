import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css']
})
export class DefinitionComponent implements OnInit {

  constructor() { }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth', block: "start" , inline: 'nearest'});
}
  ngOnInit(): void {
  }

}
