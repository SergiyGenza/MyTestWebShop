import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../models/product.model';

const ROW_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cols:number = 3;
  public rowHeight = ROW_HEIGHT[this.cols];
  category: string = 'new'

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  public onColumsCountChange(colsNum: any): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHT[this.cols];
  }

  public onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCard(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }

}
