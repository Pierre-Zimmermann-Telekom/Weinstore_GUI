import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartDialogComponentComponent } from './shopping-cart-dialog-component.component';

describe('ShoppingCartDialogComponentComponent', () => {
  let component: ShoppingCartDialogComponentComponent;
  let fixture: ComponentFixture<ShoppingCartDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoppingCartDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
