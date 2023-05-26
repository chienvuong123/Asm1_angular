import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import { ProductService } from '../services/product.service';
import { IProduct } from '../interface/product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!:IProduct
  productForm = this.formBuilder.group({
    name: [''],
    price: 0
  })
  constructor (private productService: ProductService,private router: ActivatedRoute,private formBuilder: FormBuilder){
    this.router.paramMap.subscribe(parma =>{
      const id = parma.get('id')
      this.productService.getProduct(id).subscribe(product =>{
        this.product = product

        this.productForm.patchValue({
          name: product.name,
          price:product.price
        })
      })
    })
  } 
  onHandleEdit(){
      const product:IProduct ={
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0
      }
      this.productService.updateProduct(product).subscribe(data =>{
        console.log(data);
        
      })
  }
}
