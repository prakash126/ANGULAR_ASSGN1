import { Component, OnInit } from '@angular/core';
import { CaptchaServiceService } from '../captcha-service.service';

@Component({
  selector: 'app-logging-captcha',
  templateUrl: './logging-captcha.component.html',
  styleUrls: ['./logging-captcha.component.css']
})
export class LoggingCaptchaComponent implements OnInit {
  public code:any;
  constructor(private captcha:CaptchaServiceService) { }

  ngOnInit(): void {
    this.code = this.captcha.GenerateCode();
  }

  public styleObject:any;
  public foreColor='black';
  public alignment='center';
  public ApplyEffect(){
    this.styleObject = {
      'color':this.foreColor,
      'text-align':this.alignment
    };
    return this.styleObject;
  }


}
