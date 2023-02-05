import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  public sort: string = 'desc';
  public itemsShowCount: number = 12;

  constructor() { }

  ngOnInit(): void {
  }

  public onSortUpdated(newSort: string):void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  public onItemsUpdates(count: number):void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }



  // colsNum: number
  public onColumnsUpdated(colsNum:any):void {
    this.columnsCountChange.emit(colsNum)
    console.log(colsNum);
    
  }

}
