import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExamenPractico');
  constructor(private router: Router) { }

  Listar() {
    this.router.navigate(["listar"]);
  }

  Nuevo() {
    this.router.navigate(["add"]);
  }
}