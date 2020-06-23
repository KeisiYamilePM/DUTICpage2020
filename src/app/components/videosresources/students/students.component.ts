import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../../services/youtube.service';
import { Video } from '../../../models/youtube';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  videos: Video[] = []

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {

    this.youtubeService.getVideos().subscribe(resp => {
      console.log(resp);
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
    })
  }

}
