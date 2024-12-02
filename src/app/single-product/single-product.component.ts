import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: APIService
  ) {}

  ngOnInit(): void {
    // Get the product ID from the route
    const productId = +this.route.snapshot.paramMap.get('id')!;

    // Fetch the product details
    this.productService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }
}