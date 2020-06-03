import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServicesService } from '../product-services.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart = [];
  constructor(private productservice: ProductServicesService, private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('cart-product'));
    data.filter(d => {
      if (d.isAddedToCart) {
        this.cart.push(d)
      }
    });
    
  }
}


