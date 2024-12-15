import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // En este selector renderiza el componente
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hola!';
  userName = 'Yuuki';
  userAge = 29;
}
