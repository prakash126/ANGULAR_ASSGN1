import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfordirComponent } from './ngfordir.component';

describe('NgfordirComponent', () => {
  let component: NgfordirComponent;
  let fixture: ComponentFixture<NgfordirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgfordirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfordirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
