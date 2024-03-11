import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private router: Router) { }

  submitForm() {
    // Hier könnten Sie die Benutzereingaben überprüfen oder andere Logik ausführen
    // In diesem Beispiel wird der Benutzer einfach auf eine andere Route weitergeleitet
    this.router.navigate(['/mainview']);
  }
  
}