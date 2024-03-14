import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: User = { name: '', usertype: '',password: '' };

  constructor(private router: Router) {}

  submitForm() {
    // Hier könnten Sie die Benutzereingaben überprüfen oder andere Logik ausführen
    // In diesem Beispiel wird der Benutzer einfach auf eine andere Route weitergeleitet
    this.router.navigate(['/winelist']);
  }
}
