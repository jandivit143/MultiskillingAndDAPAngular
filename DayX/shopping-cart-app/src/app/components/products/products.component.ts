import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:Product[];
  isAdmin:boolean;
  constructor(private productsService: ProductsService){
    this.products = this.productsService.products;
    this.isAdmin = true;
  }

  // doSearch(event:Event){
  //   let searchStr:string = (event.target as HTMLInputElement).value;
  //   let prodNames:string[] = [];
  //   for(let i in this.products){
  //     if(this.products[i].name.toLowerCase().startsWith(searchStr.toLowerCase())){
  //       prodNames.push(this.products[i].name);
  //     }
  //   }
  //   alert(prodNames);
  // }

  // Using Template Reference Variable
  doSearch(searchStr:String){
    let prodNames:string[] = [];
    for(let i in this.products){
      if(this.products[i].name.toLowerCase().startsWith(searchStr.toLowerCase())){
        prodNames.push(this.products[i].name);
      }
    }
    alert(prodNames);
  }

  showDetails(product:Product){
    alert(product.category + ' ' + product.name + ' ' + product.price);
  }
}
