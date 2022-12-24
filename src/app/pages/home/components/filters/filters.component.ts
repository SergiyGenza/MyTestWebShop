import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter();

  categories = ['shoes', 'sports'];

  constructor() { }

  ngOnInit(): void {
  }

  public onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

}
