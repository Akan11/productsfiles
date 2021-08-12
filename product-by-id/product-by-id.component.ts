import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/Services/test.service';
import { Products } from '../../test/test';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.scss']
})
export class ProductByIdComponent implements OnInit {
  productObj:Products= new Products();
  id:number=0;
  constructor(private testService:TestService) { }

  ngOnInit(): void {
  }
  
  onSearch(){
    this.testService. getProductById(this.id).subscribe(data=>{this.productObj=data;})
  }
}

