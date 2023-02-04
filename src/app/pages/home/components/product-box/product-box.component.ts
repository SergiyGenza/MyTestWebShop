import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/pages/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Snickers',
    price: 150,
    category: 'shoe',
    description: 'description',
    image: "https://via.placeholder.com/150",
  }

  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCard() {
    this.addToCart.emit(this.product)
  }

}
