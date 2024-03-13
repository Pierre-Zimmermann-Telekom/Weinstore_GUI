import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wine_lager } from '../interfaces';
import { NewWineDialogComponent } from '../new-wine-dialog/new-wine-dialog.component';
import { MatDialog } from '@angular/material/dialog'; 
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.scss']
})
export class WinelistComponent implements OnInit {
  wines: Wine_lager[] = [];
  filteredWines: Wine_lager[] = [];
  searchQuery: string = '';

  constructor(private http: HttpClient, public dialog: MatDialog, private dataservice: DataserviceService) { }

  ngOnInit(): void {
    this.dataservice.getLagerData().subscribe(data => {
      this.wines = data;
      this.filteredWines = [...this.wines];
    });
  }

  filterWines(): void {
    if (this.searchQuery.trim() !== '') {
      this.filteredWines = this.wines.filter(wine =>
        wine.Bezeichnung.toLowerCase().includes(this.searchQuery) ||
        wine.Produktnummer.toString().includes(this.searchQuery)
      );
    } else {
      this.filteredWines = [...this.wines];
    }
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
