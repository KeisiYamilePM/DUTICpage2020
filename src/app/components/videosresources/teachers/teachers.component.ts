import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../../services/youtube.service';
import { Video } from '../../../models/youtube';
import Swal from 'sweetalert2'
import { HandbookService } from '../../../services/handbook.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  videosM: Video[] = [];
  videosD: Video[] = [];
  videosE: Video[] = [];

  content: any[] = [];

  constructor(private youtubeService: YoutubeService,
    private handbookService: HandbookService
    ) { }

  ngOnInit(): void {
    this.onGetVideosTeacherManagement()
    this.onGetVideosTeacherDesign()
    this.onGetVideosTeacherEvaluation()
  }

  onGetVideosTeacherManagement(){
    this.youtubeService.getVideosTeacherManagement().subscribe(resp => {
      //console.log("aquiii",resp);
      var url = "https://www.youtube.com/embed/"
      this.videosM = resp;
      /*       this.videos.resourceId.videoId = url + this.videos.resourceId.videoId;
       */
    });
  }
  onGetVideosTeacherDesign(){
    this.youtubeService.getVideosTeacherDesign().subscribe(resp => {
      //console.log("aquiii",resp);
      var url = "https://www.youtube.com/embed/"
      this.videosD = resp;
      /*       this.videos.resourceId.videoId = url + this.videos.resourceId.videoId;
       */
    });
  }
  onGetVideosTeacherEvaluation(){
    this.youtubeService.getVideosTeacherEvaluation().subscribe(resp => {
      //console.log("aquiii",resp);
      var url = "https://www.youtube.com/embed/"
      this.videosE = resp;
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
    })
  }

  onClicHandbook(data) {
    this.content = this.handbookService.gethandbookTeacher()
    //console.log("infoo",this.content)
    for (let index = 0; index < this.content.length; index++) {
      if(data.resourceId.videoId==this.content[index].videoId){
        window.open(this.content[index].handbookId,'_blank')
      }
    }
  }
}
