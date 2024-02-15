import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Subject } from 'rxjs';
import { SessionStorage } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Product[]=[]; // Javascript Object
  @SessionStorage()
  myCart:string = ''; // JSON string
  // Subject
  private cartSource = new Subject<string>();
  
  // Broadcaster
  cartBroadCaster = this.cartSource.asObservable();
  constructor() {
    console.log('myCart is',this.myCart);
    if(this.myCart){
      this.cart = JSON.parse(this.myCart);
    }else{
      this.cart = new Array<Product>();
    }
  }

  // AddToCart component add products to the service using following method
  addToCartProduct(product:Product):void{
    // console.log('Inside CartService - addToCartProduct()',product.name);
    
    // Maintaining state to be immutable
    this.cart = this.cart.concat(product);
    // console.log(this.cart);
    this.myCart = JSON.stringify(this.cart);
    // console.log(this.myCart);

    // Notify all the subscribers - publisher
    this.cartSource.next(this.myCart); // we are notifying this.myCart as there is a change in cart
  }

  removeFromCart(product:Product){
    // Maintain the state immutable
    this.cart = this.cart.filter(prd => prd.id != product.id);
    // Converting javascript object to JSON string
    this.myCart = JSON.stringify(this.cart);
    // Notify all the subscribers - publish
    this.cartSource.next(this.myCart);
  }
  
  // CartDetails component get all the products from cart service using following method
  getCartItems():Product[]{
    return this.cart;
  }
}
