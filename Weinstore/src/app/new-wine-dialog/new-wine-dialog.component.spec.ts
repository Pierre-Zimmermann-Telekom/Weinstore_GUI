import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWineDialogComponent } from './new-wine-dialog.component';

describe('NewWineDialogComponent', () => {
  let component: NewWineDialogComponent;
  let fixture: ComponentFixture<NewWineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewWineDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewWineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
