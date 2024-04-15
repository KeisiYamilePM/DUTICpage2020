import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { NewsService } from '../services/news.service';
import * as AOS from 'aos';
import { NgbdModalBasic } from './modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }    
    `],
    styleUrls: ['./components.component.scss']
})

export class ComponentsComponent implements OnInit, OnDestroy {
    data: Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;

    date: { year: number, month: number };
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    content: any[] = [];

    constructor(
        private renderer: Renderer2,
        config: NgbAccordionConfig,
        private newsService: NewsService,
        private dialog: MatDialog,

    ) {
        config.closeOthers = true;
        config.type = 'info';
    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');

        this.ongetNewsList();
        //this.openModal();
        this.openInfoNew();
        AOS.init();

    }
    ngOnDestroy() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
    ongetNewsList() {
        this.content = this.newsService.getNews();
    }

    openModal() {
        console.log('Este es el modelo: ')
        const dialogRef = this.dialog.open(NgbdModalBasic, {
            width: '70%',
            height: '460px',
        })
    }
    openInfoNew() {
        Swal.fire({
            html: `
          <div class="row">
            <div class="col-12 col-lg-12 col-md-12 col-sm-12">
            <a href="https://dutic.unsa.edu.pe/#/paradero-cultural" target="_blank">
            <img src="assets/img/flyer2024-1.jpg" style="height:auto; width:100%;" class="card-img-top" alt="sabias que">
            </a
            </div>
          </div>
          `,
            showConfirmButton: false,
            width: 500,
            showCloseButton: true,
        })
    }
}
