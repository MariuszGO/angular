import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produkt',
  imports: [],
  templateUrl: './produkt.html',
  styleUrl: './produkt.css'
})
export class Produkt {
  @Input() nazwa = '';
  @Input() cena = 0;

  ilosc = 0;

  dodaj() {
    this.ilosc++;
  }

  usun() {
    if (this.ilosc > 0) {
      this.ilosc--;
    }
  }
}