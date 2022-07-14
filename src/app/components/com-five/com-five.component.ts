import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComFiveModalFormComponent } from './com-five-modal-form/com-five-modal-form.component';
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
  openModalForm(data: any) {
    const dialogRef = this.dialog.open(ComFiveModalFormComponent, {
      data: data,
      width: '400px',
      height: '450px',
    })
  }
}
