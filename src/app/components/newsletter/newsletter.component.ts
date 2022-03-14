import { Component, OnInit } from '@angular/core';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  content: any[] = []
  entryName: string
  entryFile: any
  entryId: any = 9

  constructor(private newsletterService: NewsletterService,) { 
  }

  ngOnInit(): void {
    this.entryList();
  }

  entryList() {
    this.content = this.newsletterService.getEntries()
    this.entryName = this.content[0].name
    //this.entryFile = this.sanitizer.bypassSecurityTrustResourceUrl(this.content[0].file)
  }

  searchEntry(term:string){
    this.content = this.newsletterService.searchEntries(term)
  }

  takeentry(entry:any){
    this.entryName = entry.name
    this.entryFile = entry.file
    this.entryId = entry.id
    
    console.log(" filee", this.entryId)
  }
}
