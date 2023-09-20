import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product';
  product :any [] = [
    {
      id:1,
      title:'shirt',
      price:'150',
      quantity : 1,
      image:'./assets/images/f1.jpg'
  },
    {
      id:2,
      title:'shirt',
      price:'150',
      quantity : 3,
      image:'./assets/images/f2.jpg'
  },
    {
      id:3,
      title:'shirt',
      price:'150',
      quantity : 2,
      image:'./assets/images/f3.jpg'
  },
    {
      id:4,
      title:'shirt',
      price:'150',
      quantity : 0,
      image:'./assets/images/f4.jpg'
  },
  ]
}
