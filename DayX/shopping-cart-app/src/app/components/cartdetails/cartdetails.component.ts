import { Component } from '@angular/core';
import { Product } from '../../product';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cartdetails',
    template: `
        <div class="text-center">
            <h1>Cart Details!</h1>
            <table border="3px solid black" align="center" float="right">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Product Image</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
                <tr *ngFor="let product of cartProducts">
                    <td>{{product.id}}</td>
                    <td>{{product.name}}</td>
                    <td>Rs. {{product.price}}/-</td>
                    <td><img [src]="product.imgPath" [alt]="product.name" /></td>
                    <td>{{product.category}}</td>
                    <td><button class="btn btn-success" (click)="removeProduct(product);">Remove</button></td>
                </tr>
            </table>
            <!-- <button (click)="getCartData();">Get</button> -->
        </div>
    `,
    styles:[`
        td > img{
            width: auto;
            height: 100px;
        }
        th{
            text-align: center;
            background-color: peachpuff;
        }
        td{
            text-align: center;
        }
    `],
    // providers:[CartService]
})

export class CartDetailsComponent {
    cartProducts:Product[] = [];
    constructor(private cartService:CartService) {
        // Subscribing the observable which is in the CartService
        this.cartService.cartBroadCaster.subscribe(res => {
            this.cartProducts = JSON.parse(res);
        })
        this.cartProducts = this.cartService.getCartItems();
    }
    // getCartData(){
    //     // calling CartService method
    //     this.cartProducts = this.cartService.getCartItems();
    // }

    removeProduct(product:Product){
        this.cartService.removeFromCart(product);
    }
}