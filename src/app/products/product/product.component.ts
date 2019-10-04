import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit() {
  }

}
