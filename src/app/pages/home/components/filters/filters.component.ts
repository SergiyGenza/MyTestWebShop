import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter();
  categoriesSubscription: Subscription | undefined;
  categories: Array<string> | undefined;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getAllCategories().subscribe((res) => this.categories = res);
  }

  public onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}
