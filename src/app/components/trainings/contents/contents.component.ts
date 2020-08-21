import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { TrainingsService } from '../../../services/trainings.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public dataContent: any[] = []
  isLoad = false

  displayedColumns: string[] = ['nameTheme', 'date'];
  dataSource: MatTableDataSource<any>;
  lenghtData: number;

  constructor(
    private trainingsService: TrainingsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.ongetList()
/*     console.log("alksdjfhkash yeeeii", this.data)
 */  }

  ongetList() {
    if (this.data == 'moodleI') {
      this.getMoodleI();
    } else if (this.data == 'moodleII') {
      this.getMoodleII();
    } else if (this.data == 'moodleIII') {
      this.getMoodleIII();
    } else if (this.data == 'hgoogle'){
      this.getHGoogle();
    }
  }

  getMoodleI(){
    this.isLoad = true
    this.trainingsService.getMoodleI().subscribe((data: any) => {
      /*       console.log('moodlei pruebaaaaaaa: ', data[0].theme)
       */
      this.dataContent = data
      this.dataSource = new MatTableDataSource(data[0].theme)

      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.isLoad = false
      this.lenghtData = data.length
    }, err => {
      this.isLoad = false
    })
  }
  getMoodleII(){
    this.isLoad = true
    this.trainingsService.getMoodleII().subscribe((data: any) => {
      /*       console.log('moodlei pruebaaaaaaa: ', data[0].theme)
       */
      this.dataContent = data
      this.dataSource = new MatTableDataSource(data[0].theme)

      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.isLoad = false
      this.lenghtData = data.length
    }, err => {
      this.isLoad = false
    })
  }
  getMoodleIII(){
    this.isLoad = true
    this.trainingsService.getMoodleIII().subscribe((data: any) => {
      /*       console.log('moodlei pruebaaaaaaa: ', data[0].theme)
       */
      this.dataContent = data
      this.dataSource = new MatTableDataSource(data[0].theme)

      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.isLoad = false
      this.lenghtData = data.length
    }, err => {
      this.isLoad = false
    })
  }
  getHGoogle(){
    this.isLoad = true
    this.trainingsService.getHGoogle().subscribe((data: any) => {
      /*       console.log('moodlei pruebaaaaaaa: ', data[0].theme)
       */
      this.dataContent = data
      this.dataSource = new MatTableDataSource(data[0].theme)

      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.isLoad = false
      this.lenghtData = data.length
    }, err => {
      this.isLoad = false
    })
  }

  onClickSilabo(){
    window.open(this.dataContent[0].silabo,'_blank')
  }

}
