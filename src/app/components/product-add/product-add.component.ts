import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interface/product';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  constructor (private formBuilder: FormBuilder, private productService: ProductService){

  }
  productForm = this.formBuilder.group({
    name: [''],
    price: 0
  })
  onHandleAdd(){
      const product:IProduct = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0
      } 
      this.productService.addProduct(product).subscribe(data =>{
        console.log(data);
        
      })
  }
}
