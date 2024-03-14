import { Component } from '@angular/core';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { DataserviceService } from '../dataservice.service';
import { customer } from '../interfaces';

@Component({
  selector: 'app-newcustomerdialog',
  templateUrl: './newcustomerdialog.component.html',
  styleUrl: './newcustomerdialog.component.scss',
})
export class NewcustomerdialogComponent {
  newCustomer: customer = {
    Vorname: '',
    Nachname: '',
    Postleitzahl: '',
    Ort: '',
    Telefonnummer: '',
    Email: '',
  };

  constructor(
    private dataService: DataserviceService,
    private dialogRef: MatDialogRef<NewcustomerdialogComponent>
  ) {}

  addNewCustomer() {
    this.dataService.addcustomer(this.newCustomer); // Add new customer
    this.closeNewCustomerDialog(); // Close the dialog
  }

  closeNewCustomerDialog() {
    this.dialogRef.close(); // Close the dialog
    this.clearForm(); // Clear the form
  }

  clearForm() {
    // Reset newCustomer object to clear the form fields
    this.newCustomer = {
      Vorname: '',
      Nachname: '',
      Postleitzahl: '',
      Ort: '',
      Telefonnummer: '',
      Email: '',
    };
  }
  setDialogWidth() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px'; // Breite des Dialogs
    this.dialogRef.updateSize(dialogConfig.width); // Update der Dialoggröße
  }

  // Aufruf der Funktion zum Einstellen der Dialogbreite beim Initialisieren
  ngOnInit() {
    this.setDialogWidth();
  }
}
