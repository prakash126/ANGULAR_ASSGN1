import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackbyng-for',
  templateUrl: './trackbyng-for.component.html',
  styleUrls: ['./trackbyng-for.component.css']
})
export class TrackbyngForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
      Price:5600,
      photo:'https://4.imimg.com/data4/YW/LY/ANDROID-19051907/product-500x500.jpeg'
    }
  ]

  public AddProduct(){
    this.product = [
      {
        id:1,
        Name:'LG TV',
        Price:45600,
        photo : 'https://images.samsung.com/is/image/samsung/in-uhd-tv-tu8570-ua43tu8570uxxl-frontblack-226347267?$720_576_PNG$'
      },
      {
        id:2,
        Name:'Bata',
        Price:4600,
        photo:'https://4.imimg.com/data4/YW/LY/ANDROID-19051907/product-500x500.jpeg'
      },
      {
        id:3,
        Name:'Onida TV',
        Price:55600,
        photo : 'https://images.samsung.com/is/image/samsung/in-uhd-tv-tu8570-ua43tu8570uxxl-frontblack-226347267?$720_576_PNG$'
      },
      {
        id:4,
        Name:'Khadims',
        Price:5600,
        photo:'https://4.imimg.com/data4/YW/LY/ANDROID-19051907/product-500x500.jpeg'
      }
    ]
  }

  // public TrackById(index:any,product:any){
  //   alert(index);
  //   return product.Id;
  // }

  @Input() strName="";
}
