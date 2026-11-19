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

  produkty = [
    { nazwa: 'Laptop Lenovo', cena: 2500, zdjecie: 'laptop.png' },
    { nazwa: 'Mysz Logitech', cena: 120, zdjecie: 'mysz.jpg' },
    { nazwa: 'Klawiatura Dell', cena: 180, zdjecie: 'klawiatura.jpg' }
  ];
}