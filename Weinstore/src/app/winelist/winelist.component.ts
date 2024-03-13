import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wine } from '../interfaces';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.scss']
})
export class WinelistComponent implements OnInit {
  wines: Wine[] = [];
  filteredWines: Wine[] = [];
  searchQuery: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Wine[]>('assets/lager.json').subscribe(data => {
      this.wines = data;
      this.filteredWines = [...this.wines];
      console.log(this.wines)
    });
  }

  filterWines(): void {
    if (this.searchQuery.trim() !== '') {
      this.filteredWines = this.wines.filter(wine =>
        wine.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredWines = [...this.wines];
    }
  }
}
