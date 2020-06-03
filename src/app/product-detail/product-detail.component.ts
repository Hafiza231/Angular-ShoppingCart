import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServicesService } from '../product-services.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pid;
  productdetail;
  product: Product[];
  plist = [];
  constructor(private router: Router, private productservice: ProductServicesService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    if (localStorage.getItem('product-detail')) {
      this.plist = JSON.parse(localStorage.getItem('product-detail'));
    }
    this.pid = +this.activatedroute.snapshot.params.id;
    this.productservice.getproductDetail(this.pid).subscribe(data => {

      this.productdetail = data
    });
  }
  getUser() {
    return sessionStorage.getItem('user');

  }
  OnCart() {
    this.pid = +this.activatedroute.snapshot.params.id;
    this.productservice.getproduct().subscribe((data: any) => {
      data.forEach(element => {
        if (element.id === this.pid) {
          element.isAddedToCart = true
          this.productdetail = element;
        }
      });
      localStorage.setItem('cart-product', JSON.stringify(data))
      this.router.navigate(['/cart']);
    });


  }
}
