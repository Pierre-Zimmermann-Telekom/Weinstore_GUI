import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomerdialogComponent } from './newcustomerdialog.component';

describe('NewcustomerdialogComponent', () => {
  let component: NewcustomerdialogComponent;
  let fixture: ComponentFixture<NewcustomerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewcustomerdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewcustomerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
