import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catlog',
  templateUrl: './catlog.component.html',
  styleUrls: ['./catlog.component.css']
})
export class CatlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // public product = [
  //   {
  //     Id:1,Name:'Samsung TV',Price:45600,Photo:''
  //   }
  // ]
  public product = [
    {
      id:1,
      Name:'Samsung TV',
      Price:45600,
      photo : 'https://images.samsung.com/is/image/samsung/in-uhd-tv-tu8570-ua43tu8570uxxl-frontblack-226347267?$720_576_PNG$'
    },
    {
      id:1,
      Name:'Lee cooper',
      Price:45600,
      photo:'https://4.imimg.com/data4/YW/LY/ANDROID-19051907/product-500x500.jpeg'
    }
  ]
}
