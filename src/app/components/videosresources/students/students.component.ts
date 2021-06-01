import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../../services/youtube.service';
import { Video } from '../../../models/youtube';
import Swal from 'sweetalert2'
import { HandbookService } from '../../../services/handbook.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  videos: Video[] = []
  content: any[] = [];
  contentV: any[] = [];

  constructor(
    private youtubeService: YoutubeService,
    private handbookService: HandbookService
    ) { }

  ngOnInit(): void {

    this.youtubeService.getVideosStudent().subscribe(resp => {
      console.log("studeeents",resp);
      var url = "https://www.youtube.com/embed/"
      this.videos = resp;
      /*       this.videos.resourceId.videoId = url + this.videos.resourceId.videoId;
       */
    });
  }

  onClicVideo(data) {
    Swal.fire({
      html: ` 
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/${data.resourceId.videoId}"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
      </iframe>`,
      showConfirmButton: false,
      width: 800,
      showCloseButton: true,
    })
  }

  onClicHandbook(data) {
    this.content = this.handbookService.gethandbookStudent()
    //console.log("infoo",this.content)

    for (let index = 0; index < this.content.length; index++) {
      if(data.resourceId.videoId==this.content[index].videoId){
        window.open(this.content[index].handbookId,'_blank')
      }
    }
  }
  verify(videoId):boolean{
    //console.log("seraaaa", videoId)
    this.contentV = this.handbookService.gethandbookStudent()
    for (let index = 0; index < this.contentV.length; index++) {
      if(videoId == this.contentV[index].videoId){
        if(this.contentV[index].handbookId == "no"){
          //console.log("false")
          return false
        }
        else {           
          //console.log("true")
          return true
        }
      }
    }
  }
}
