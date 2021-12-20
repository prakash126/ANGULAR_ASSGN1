import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifdir',
  templateUrl: './ngifdir.component.html',
  styleUrls: ['./ngifdir.component.css']
})
export class NgifdirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isVisible = false;
  public btnText = 'Show';

  public product = {
      Name: 'Samsung TV',
      Price: 34000.56,
      Photo : 'https://images.samsung.com/is/image/samsung/in-uhd-tv-tu8570-ua43tu8570uxxl-frontblack-226347267?$720_576_PNG$'
  }

  public DisplayClick(){
    this.isVisible = (this.isVisible == false) ? true : false;
    this.btnText = (this.btnText == 'Show') ? 'Hide' : 'Show';
  }

}
