import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  user = {
    name: '',
    password: ''
  };
  
  onSubmit() {
    if(this.user.name === 'admin' && this.user.password === 'admin') {
      this.router.navigate(['/produtos']);
    } else {
      Swal.fire({
        text: "Usuário ou senha inválidos",
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Fechar'
      });
    }
  }
}
