import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { CartService } from 'src/app/services/cart.service';
import { Cart, CartItem } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [{
      product: 'https://via.placeholder.com/150',
      name: 'snickers',
      price: 150,
      quantity: 1,
      id: 1,
    },
    {
      product: 'https://via.placeholder.com/150',
      name: 'snickers',
      price: 150,
      quantity: 1,
      id: 2,
    },
    ]
  };
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  dataSource: CartItem[] = [];
  cartSubscription: Subscription | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items
    });
  }

  getTotal(items: CartItem[]) {
    return this.cartService.getTotal(items)
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onCheckout(): void {
    //   this.http
    //     .post('http://localhost:4242/checkout', {
    //       items: this.cart.items,
    //     })
    //     .subscribe(async (res: any) => {
    //       let stripe = await loadStripe('your token');
    //       stripe?.redirectToCheckout({
    //         sessionId: res.id,
    //       });
    //     });
  }
}
