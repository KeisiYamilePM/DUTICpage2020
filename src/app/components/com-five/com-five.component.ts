import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComFiveModalComponent } from './com-five-modal/com-five-modal.component';

@Component({
  selector: 'app-com-five',
  templateUrl: './com-five.component.html',
  styleUrls: ['./com-five.component.css']
})
export class ComFiveComponent implements OnInit {

  constructor(private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openModal(data: any) {
    const dialogRef = this.dialog.open(ComFiveModalComponent, {
      data: data,
      width: '70%',
      height: '460px',
    })
  }
}
