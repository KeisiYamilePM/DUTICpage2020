import { Component, OnInit, ViewChild } from '@angular/core';
import { OnlineWorkshopsService } from '../../../services/online-workshops.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-videoconferences',
  templateUrl: './videoconferences.component.html',
  styleUrls: ['./videoconferences.component.css']
})
export class VideoconferencesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort
  
  public data: any[] = []
  isLoad= false

  displayedColumns: string[] = ['name', 'speaker','nationality', 'organizedBy', 'date', 'state', 'link'];
  dataSource: MatTableDataSource<any>;
  lenghtData: number;

  constructor(private videoconferencesService: OnlineWorkshopsService) { }

  ngOnInit(): void {
    this.ongetVideoconferencesList()
  }
   
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ongetVideoconferencesList(){
    this.isLoad= true
    this.videoconferencesService.getVideoconferencesList().subscribe((data:any)=>{
      /*console.log('tvunsaaaa: ', data)*/
      this.data = data
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.isLoad= false
      this.lenghtData = data.length
    }, err => {
      this.isLoad=false
    })
  }
}
