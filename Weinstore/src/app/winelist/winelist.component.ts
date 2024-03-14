import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataserviceService } from '../dataservice.service';
import { Wine_lager } from '../interfaces';
import { NewWineDialogComponent } from '../new-wine-dialog/new-wine-dialog.component';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.scss']
})
export class WinelistComponent implements OnInit {
  wines: Wine_lager[] = [];
  filteredWines: Wine_lager[] = [];
  searchQuery: string = '';
  displayedColumns: string[] = ['Produktnummer', 'Name', 'Jahrgang', 'Region', 'Land', 'Bestand', 'Lagerort', 'Verkaufspreis', 'Einkaufspreis'];


  constructor(private http: HttpClient, public dialog: MatDialog, private dataservice: DataserviceService) { }

  ngOnInit(): void {
    this.dataservice.getLagerData().subscribe(data => {
      this.wines = data;
      this.filteredWines = [...this.wines];
    });
  }
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredWines = this.wines.filter(wine =>
      wine.Bezeichnung.toLowerCase().includes(filterValue) ||
      wine.Produktnummer.toString().includes(filterValue)
    );
  }
  
  openNewWineDialog(): void {
    const dialogRef = this.dialog.open(NewWineDialogComponent, {
      width: '600px',
      data: {}
    }); 

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
