import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register/register.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { Databinding2Component } from './databinding2/databinding2.component';
import { NgifdirComponent } from './ngifdir/ngifdir.component';
import { NgfordirComponent } from './ngfordir/ngfordir.component';
import { CatlogComponent } from './catlog/catlog.component';
import { TrackbyngForComponent } from './trackbyng-for/trackbyng-for.component';
import { CaptchaServiceService } from './captcha-service.service';
import { LoggingCaptchaComponent } from './logging-captcha/logging-captcha.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DatabindingComponent,
    Databinding2Component,
    NgifdirComponent,
    NgfordirComponent,
    CatlogComponent,
    TrackbyngForComponent,
    LoggingCaptchaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CaptchaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
