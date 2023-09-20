import { Component } from '@angular/core';
interface product{
img:string,

}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products=[
  {
    id: 1,
    title: "Shirt",
    quantity: 1,
    img:"assets/images/f1.jpg",
    price : "150",
    status : "Only 1 left in stock",
  },
  {
    id: 2,
    title: "Shirt",
    quantity: 0,
    img:"assets/images/f2.jpg",
    price : "150",
    status : "SoldOut",
  },
  {
    id: 3,
    title: "Shirt",
    quantity: 3,
    img:"assets/images/f3.jpg",
    price : "200",
    status : "In the stock",
  },
  {
    id: 4,
    title: "Shirt",
    quantity: 1,
    img:"assets/images/f4.jpg",
    price : "180",
    status : "Only 1 left in stock",
  },

  {
    id: 5,
    title: "Shirt",
    quantity: 5,
    img:"assets/images/f5.jpg",
    price : "150",
    status : "In the stock",
  },
  {
    id: 6,
    title: "Shirt",
    quantity: 0,
    img:"assets/images/f6.jpg",
    price : "150",
    status : "SoldOut",
  },
]

countQuantity(id:number){
  let currentproduct = this.products.find((item)=> item.id ==id)
  currentproduct!.quantity = currentproduct!.quantity-1
  console.log(currentproduct);
  
}
}
