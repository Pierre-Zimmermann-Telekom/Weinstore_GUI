import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { customer } from '../interfaces';
import { Wine_lager } from '../interfaces';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-shopping-cart-dialog-component',
  templateUrl: './shopping-cart-dialog-component.component.html',
  styleUrls: ['./shopping-cart-dialog-component.component.scss']
})
export class ShoppingCartDialogComponentComponent {
  wines: Wine_lager[] = [];
  cart: Map<string, number> = new Map<string, number>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customer: customer },
    private dataService: DataserviceService
  ) {
    this.dataService.getLagerData().subscribe(wines => {
      this.wines = wines;
    });
  }

  increaseQuantity(wine: Wine_lager): void {
    const currentQuantity = this.cart.get(wine.Produktnummer) || 0;
    this.cart.set(wine.Produktnummer, currentQuantity + 1);
  }

  decreaseQuantity(wine: Wine_lager): void {
    const currentQuantity = this.cart.get(wine.Produktnummer) || 0;
    if (currentQuantity > 0) {
      this.cart.set(wine.Produktnummer, currentQuantity - 1);
    }
  }

  getQuantity(wine: Wine_lager): number {
    return this.cart.get(wine.Produktnummer) || 0;
  }
}
