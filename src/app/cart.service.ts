import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'https://fakestoreapi.com/carts';

  constructor(private http: HttpClient) {}

  // Fetch all cart items
  getCartItems(cartId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${cartId}`);
  }

  // Add an item to the cart
  addItemToCart(cartId: number, productId: number, quantity: number): Observable<any> {
    return this.http.post(this.apiUrl, {
      userId: 1, 
      date: new Date(),
      products: [{ productId, quantity }],
    });
  }

  // Update cart items
  updateCart(cartId: number, products: any[]): Observable<any> {
    return this.http.put(`${this.apiUrl}/${cartId}`, {
      userId: 1, 
      date: new Date(),
      products,
    });
  }

  // Delete an item from the cart 
  deleteCart(cartId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${cartId}`);
  }
}
