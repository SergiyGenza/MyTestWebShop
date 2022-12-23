import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cols:number = 3;

  constructor() { }

  ngOnInit(): void {
  }

  onColumsCountChange(colsNum:any):void {
    this.cols = colsNum;
    console.log(this.cols);
    console.log(colsNum);
    
  }

}
