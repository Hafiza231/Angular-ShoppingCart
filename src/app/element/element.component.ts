import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../product-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
product:Product[];
  constructor(private productservice:ProductServicesService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   // const cart = [];
    this.productservice.getproduct().subscribe((data)=>{
      console.log(data)
      this.product=data});

    }
  getUser()
  {
    return sessionStorage.getItem('user');
    
  }
}
