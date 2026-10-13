import { Component } from '@angular/core';

@Component({
  selector: 'app-produkt',
  imports: [],
  templateUrl: './produkt.html',
  styleUrl: './produkt.css'
})
export class Produkt {
  nazwa = 'Audi A4';
  cena = 250000;
  ilosc = 0;

  dodaj() {
    this.ilosc++;
  }
}