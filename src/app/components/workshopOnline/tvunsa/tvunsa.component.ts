import { Component, OnInit, ViewChild } from '@angular/core';
import { OnlineWorkshopsService } from '../../../services/online-workshops.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tvunsa',
  templateUrl: './tvunsa.component.html',
  styleUrls: ['./tvunsa.component.css']
})
export class TvunsaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort

  
  public data: any[] = []
  isLoad= false

  displayedColumns: string[] = ['name', 'sesion', 'speaker', 'date', 'state', 'link'];
  dataSource: MatTableDataSource<any>;
  lenghtData: number

  constructor(private tvunsaService: OnlineWorkshopsService) { 
    this.lenghtData = 0
  }

  ngOnInit(): void {
    this.ongetTvunsaList()
  }
  
  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }
  ongetTvunsaList(){
    this.isLoad= true
    this.tvunsaService.getTvunsaList().subscribe((data:any)=>{
      console.log('tvunsaaaa: ', data)
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
