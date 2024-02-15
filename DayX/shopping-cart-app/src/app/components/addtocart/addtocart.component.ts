import { Component, Input } from '@angular/core';
import { Product } from '../../product';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-addtocart',
    template: `
        <button class="btn btn-success" (click)="addProduct();">Add To Cart</button>
    `,
    styles:[`
        button{
            margin: 5px;
        }
    `],
    // providers:[CartService]
})

export class AddToCartComponent {
    @Input()
    selectedProduct:Product;
    constructor(private cartService:CartService) {
        this.selectedProduct = {} as Product;
    }

    addProduct(){
        // console.log('Adding product to the cart is',this.selectedProduct);

        // calling method from CartService
        this.cartService.addToCartProduct(this.selectedProduct);
    }
}