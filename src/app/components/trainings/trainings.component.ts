import { Component, OnInit } from '@angular/core';
import { ContentsComponent } from './contents/contents.component';
import { MatDialog } from '@angular/material/dialog';
import { YoutubeService } from 'app/services/youtube.service';
import { Video } from 'app/models/youtube';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  descFlagMoodleI: boolean;
  descFlagMoodleII: boolean;
  descFlagMoodleIII: boolean;
  descFlagHGoogle: boolean;
  descFlagTools: boolean;
  descFlagExeL: boolean;

  videos: Video[] = []
  content: any[] = [];
 
  constructor(
    private dialog: MatDialog,
    private youtubeService: YoutubeService,
    ) { }

  ngOnInit(): void {
    this.youtubeService.getVideosWorkshop().subscribe(resp => {
      //console.log("studeeents",resp);
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

  OnClickDescriptionMoodleI(){
    if (this.descFlagMoodleI == true)
      this.descFlagMoodleI = false
    else
      this.descFlagMoodleI = true
  }
  OnClickDescriptionMoodleII(){
    if (this.descFlagMoodleII == true)
      this.descFlagMoodleII = false
    else
      this.descFlagMoodleII = true
  }
  OnClickDescriptionMoodleIII(){
    if (this.descFlagMoodleIII == true)
      this.descFlagMoodleIII = false
    else
      this.descFlagMoodleIII = true
  }
  OnClickDescription(){
    if (this.descFlagHGoogle == true)
      this.descFlagHGoogle = false
    else
      this.descFlagHGoogle = true
  }
  OnClickDescriptionTools(){
    if (this.descFlagTools == true)
      this.descFlagTools = false
    else
      this.descFlagTools = true
  }
  OnClickDescriptionExeL(){
    if (this.descFlagExeL == true)
      this.descFlagExeL = false
    else
      this.descFlagExeL = true
  }

  onClicLinkMoodle(data) {
    if (data == 'moodleI') {
      window.open('https://forms.gle/yD4uUuvQeuHdLHrL9','_blank')
    } else if (data == 'moodleII') {
      window.open('https://forms.gle/XweTHi6vT3uq2JuQ8','_blank')
    } else if (data == 'moodleIII') {
      window.open('https://forms.gle/Hk3AFWeMQp6F4ADq7','_blank')
    } else if (data == 'hgoogle') {
      window.open('https://forms.gle/X4jUEUXzJhyRbtvd9','_blank')
    } else if (data == 'tool') {
      window.open('','_blank')
    } else if (data == 'exeL') {
      window.open('https://forms.gle/3Yx5NKGn6GvwQg5y7','_blank')
    }
  }

  onClicLinkMoodleTurnB(data) {
    if (data == 'moodleI') {
      window.open('https://forms.gle/WPsKRXrLNSmYCAer7','_blank')
    } else if (data == 'moodleII') {
      window.open('https://forms.gle/cXos4p7yLfWd4pEw9','_blank')
    } else if (data == 'moodleIII') {
      window.open('https://forms.gle/WEMVpf9Zede9rQko8','_blank')
    } else if (data == 'hgoogle') {
      window.open('','_blank')
    } else if (data == 'tool') {
      window.open('','_blank')
    } else if (data == 'exeL') {
      window.open('https://forms.gle/3Yx5NKGn6GvwQg5y7','_blank')
    }
  }

  openModal(data: any) {
    console.log('Este es el modelo: ', data)
    const dialogRef = this.dialog.open(ContentsComponent, {
      data: data,
      width: '70%',
      height: '460px',
    })
  }
}
