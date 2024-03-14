import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent {
  constructor(private router: Router) { }  

  winelist(){
    this.router.navigate(['/winelist']);
  }
  customerview(){
    this.router.navigate(['/customerlist']);
  }
}
