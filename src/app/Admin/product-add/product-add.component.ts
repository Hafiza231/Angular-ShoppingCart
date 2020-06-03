import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ProductServicesService } from 'src/app/product-services.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productform:FormGroup;
  editproduct;
  editid;
  constructor(private fb:FormBuilder,private productservice:ProductServicesService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.productform=this.fb.group({
      id:[''],
      productname:['',Validators.required],
      productprice:['',Validators.required],
      productimage:['',Validators.required],
      productdes:['',Validators.required],
      productcategory:['',Validators.required],
      productrating:['',Validators.required],
    });
    this.editid = this.activatedRoute.snapshot.params.id;
    console.log(this.editid );
    if(this.editproduct){
        this.productservice.getproductDetail(+ this.editid).subscribe(res=>{
            this.productform.setValue(res) ;
            console.log(res)
        },err=>{
          console.log(err)
        })
    }

  }
  get productFormControl() {
    return this.productform.controls;
  }

  onSubmit(){
    if(!this.editproduct)
    {
    
    this.productservice.addproduct(this.productform.value).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/product']);
      },
      (error:any)=>console.log(error)
    );
    }
    else
    {
      this.productservice.updateproduct(this.productform.value).subscribe(
        ()=>{
          this.router.navigate(['product']);
        },
        (error:any)=>console.log(error)
      );
    }

  }
}
