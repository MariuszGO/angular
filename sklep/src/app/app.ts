import { Component } from '@angular/core';
import { Produkt } from './produkt/produkt';

@Component({
  selector: 'app-root',
  imports: [Produkt],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tytul = 'Sklep komputerowy';
}