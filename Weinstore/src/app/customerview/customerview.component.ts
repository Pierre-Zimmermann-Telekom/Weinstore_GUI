import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DataserviceService } from '../dataservice.service';
import { customer } from '../interfaces';
import { NewcustomerdialogComponent } from '../newcustomerdialog/newcustomerdialog.component';
import {
  ShoppingCartDialogComponentComponent,
} from '../shopping-cart-dialog-component/shopping-cart-dialog-component.component';

@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.scss']
})
export class CustomerviewComponent {
  customers: customer[] = [];
  filteredCustomers: customer[] = [];
  searchQuery: string = '';
  displayedColumns: string[] = ['Vorname', 'Nachname', 'Postleitzahl', 'Ort', 'Telefonnummer', 'Email', 'Actions'];


  constructor(public dialog: MatDialog, private dataservice: DataserviceService,private router: Router) { }

  ngOnInit(): void {
    this.dataservice.getKundenData().subscribe(data => {
      this.customers = data;
      this.filteredCustomers = [...this.customers];
    });
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredCustomers = this.customers.filter(customers =>
      customers.Vorname.toLowerCase().includes(filterValue) ||
      customers.Nachname.toString().includes(filterValue) ||
      customers.Email.toString().includes(filterValue)
    );
  }

  filterCustomers(): void {
    if (this.searchQuery.trim() !== '') {
      this.filteredCustomers = this.customers.filter(customer =>
        customer.Vorname.toLowerCase().includes(this.searchQuery) ||
        customer.Nachname.toLowerCase().includes(this.searchQuery) ||
        customer.Email.toLowerCase().includes(this.searchQuery)
      );
    } else {
      this.filteredCustomers = [...this.customers];
    }
  }

  openNewCustomerDialog(): void {
    const dialogRef = this.dialog.open(NewcustomerdialogComponent, {
      width: '600px',
      data: {}
    }); 

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  edit(){}
  openShoppingCartDialog(customer: customer): void {
    const dialogRef = this.dialog.open(ShoppingCartDialogComponentComponent, {
      width: '600px',
      data: { customer }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Hier können Sie auf Ergebnisse reagieren, wenn der Dialog geschlossen wird
    });
  }
  home() {
    // Hier könnten Sie die Benutzereingaben überprüfen oder andere Logik ausführen
    // In diesem Beispiel wird der Benutzer einfach auf eine andere Route weitergeleitet
    this.router.navigate(['/portal']);
  }
}