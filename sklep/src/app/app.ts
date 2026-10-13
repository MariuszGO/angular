import { Component } from '@angular/core';
import { Produkt } from './produkt/produkt';

/* ng generate component nazwa_komponentu */

@Component({
  selector: 'app-root',
  imports: [Produkt],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tytul = 'Sklep komputerowy';
}