import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  products:Product[];
  productId:number;
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute){
    this.productId = 0;
    this.products = this.productsService.products;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parameters => {
      // console.log('parameters are',parameters);
      this.productId = parseInt(parameters['id']);
    });
  }
}
