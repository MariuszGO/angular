import { Component, signal } from '@angular/core';
import { Produkty } from './produkty/produkty';

@Component({
  selector: 'app-root',
  imports: [ Produkty],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sklep3');

  uczniowie = [{imie: 'Jan', nazwisko: 'Kowalski', wiek: 10},
               {imie: 'Adam', nazwisko: 'Nowak', wiek: 20},
               {imie: 'Paweł', nazwisko: 'Gaweł', wiek: 25},
               {imie: 'Antoni', nazwisko: 'Nowak', wiek: 29}
  ]

}
