import { Component } from '@angular/core';
import { Produkt } from './produkt/produkt';

<<<<<<< HEAD
=======
/* ng generate component nazwa_komponentu */

>>>>>>> f97bb84e9a6926807ec029d7d628f3a136a96e8b
@Component({
  selector: 'app-root',
  imports: [Produkt],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tytul = 'Sklep komputerowy';
}