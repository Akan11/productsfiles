import { Component, OnInit } from '@angular/core';
import { Products } from '../../test/test';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  testService: any;
  product: Products;
  submitted: Boolean;

  constructor() { }
    
    ngOnInit(): void {
    }
    newProduct(): void {
      this.submitted = false;
      this.product = new Products();
    }
    save() {
      this.testService.addProduct(this.product).subscribe(data => console.log(data), error => console.log(error));
      this.product = new Products();
      console.log("New product created" + this.product);
    }
    onSubmit() {
      this.submitted = true;
      this.save();
    }
   
}
