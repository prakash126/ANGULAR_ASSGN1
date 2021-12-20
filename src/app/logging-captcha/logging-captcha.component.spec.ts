import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingCaptchaComponent } from './logging-captcha.component';

describe('LoggingCaptchaComponent', () => {
  let component: LoggingCaptchaComponent;
  let fixture: ComponentFixture<LoggingCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggingCaptchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
