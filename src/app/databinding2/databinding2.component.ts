import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding2',
  templateUrl: './databinding2.component.html',
  styleUrls: ['./databinding2.component.css']
})
export class Databinding2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public Name:any;
  public Price:any;
  public ShippedTo:any;
  public IsInStock:any;



}
