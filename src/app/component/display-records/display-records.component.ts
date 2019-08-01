import { Component, OnInit } from '@angular/core';
import { DisplayRecordsService } from 'src/app/services/display-records.service';
import { HttpErrorResponse } from '@angular/common/http';
// import { DisplayRecordsService } from '../../services/display-records.service'

@Component({
  selector: 'app-display-records',
  templateUrl: './display-records.component.html',
  styleUrls: ['./display-records.component.css']
})
export class DisplayRecordsComponent implements OnInit {
  private res:any;
  p: Number = 1;
  count: Number = 10;
  constructor(private _fetch:DisplayRecordsService) { }

  ngOnInit() {
    this._fetch.getRecords().subscribe((result)=>{
      this.res=result;
      console.log(this.res);
    }),(err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("client side error")
      }else{
        console.log("server side error")
      }
    }
  }

}
