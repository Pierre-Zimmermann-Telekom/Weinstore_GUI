import { Component } from '@angular/core';
import { Wine_lager } from '../interfaces';
import { DataserviceService } from '../dataservice.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-wine-dialog',
  templateUrl: './new-wine-dialog.component.html',
  styleUrls: ['./new-wine-dialog.component.scss']
})
export class NewWineDialogComponent {
  newWine: Wine_lager = {
    "Produktnummer": "",
    "Bezeichnung": "",
    "Jahrgang": "",
    "Region": "",
    "Land": "",
    "Bestand": 0,
    "Lagerort": "",
    "Verkaufspreis": "",
    "Einkaufspreis": ""
  };

  lagerData: Wine_lager[] = []; // Array to store existing wines

  constructor(private dataService: DataserviceService, private dialogRef: MatDialogRef<NewWineDialogComponent>) {
    this.dataService.getLagerData(); // Load existing wines when component initializes
  }

  addNewWine() {
    this.dataService.addWine(this.newWine); // Add new wine
    this.closeNewWineDialog(); // Close the dialog
  }

  closeNewWineDialog() {
    this.dialogRef.close(); // Close the dialog
    this.clearForm(); // Clear the form
  }

  clearForm() {
    // Reset newWine object to clear the form fields
    this.newWine = {
      "Produktnummer": "",
      "Bezeichnung": "",
      "Jahrgang": "",
      "Region": "",
      "Land": "",
      "Bestand": 0,
      "Lagerort": "",
      "Verkaufspreis": "",
      "Einkaufspreis": ""
    };
  }
}
