import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private Products:Array<Product>;
  constructor() { }

  ngOnInit() {
    this.Products=[
   new Product(1,"第一个",1.99,3.5,"这是一个商品描述",["电子产品","硬件设备"]),
   new Product(1,"第一个",1.99,3.5,"这是一个商品描述",["电子产品","硬件设备"]),
   new Product(1,"第一个",1.99,3.5,"这是一个商品描述",["电子产品","硬件设备"]),
   new Product(1,"第一个",1.99,3.5,"这是一个商品描述",["电子产品","硬件设备"]),
   new Product(1,"第一个",1.99,3.5,"这是一个商品描述",["电子产品","硬件设备"]),
   new Product(1,"第一个",1.99,3.5,"这是一个商品描述",["电子产品","硬件设备"])
 ]   
  }

}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
