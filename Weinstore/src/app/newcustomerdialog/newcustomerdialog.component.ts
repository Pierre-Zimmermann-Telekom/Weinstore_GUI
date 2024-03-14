import { Component } from '@angular/core';
import { customer } from '../interfaces';
import { DataserviceService } from '../dataservice.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-newcustomerdialog',
  templateUrl: './newcustomerdialog.component.html',
  styleUrl: './newcustomerdialog.component.scss'
})
export class NewcustomerdialogComponent {

  newCustomer: customer = {
    "Vorname": "",
    "Nachname": "",
    "Postleitzahl": "",
    "Ort": "",
    "Email": ""
  };

  constructor(private dataService: DataserviceService, private dialogRef: MatDialogRef<NewcustomerdialogComponent>) {}

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
      "Vorname": "",
      "Nachname": "",
      "Postleitzahl": "",
      "Ort": "",
      "Email": ""
    };
  }
}