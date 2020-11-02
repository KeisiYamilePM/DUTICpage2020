import { Component, OnInit } from '@angular/core';
import { ContentsComponent } from './contents/contents.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private dialog: MatDialog,
    ) { }

  ngOnInit(): void {
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

  onClicLinkMoodle(data) {
    if (data == 'moodleI') {
      window.open('https://forms.gle/Hj4HU7Pkjd3nth447','_blank')
    } else if (data == 'moodleII') {
      window.open('https://forms.gle/KW4RDR9M8crVNpRb9','_blank')
    } else if (data == 'moodleIII') {
      window.open('https://forms.gle/ATZKF51g8ThMPaer9','_blank')
    } else if (data == 'hgoogle') {
      window.open('https://forms.gle/Qv7qkxzXZRYTh78Y8','_blank')
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
