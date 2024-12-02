import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartId = 1; 
  cartItems: any[] = [];
  productId = 0; 
  quantity = 1; 

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  // Load all items in the cart
  loadCart(): void {
    this.cartService.getCartItems(this.cartId).subscribe((data) => {
      this.cartItems = data.products || [];
    });
  }

  // Add a new item to the cart
  addItem(): void {
    this.cartService.addItemToCart(this.cartId, this.productId, this.quantity).subscribe(() => {
      this.loadCart();
    });
  }

  // Update the cart
  updateCart(): void {
    this.cartService.updateCart(this.cartId, this.cartItems).subscribe(() => {
      this.loadCart();
    });
  }

  // Delete the entire cart
  deleteCart(): void {
    this.cartService.deleteCart(this.cartId).subscribe(() => {
      this.cartItems = [];
    });
  }
}
