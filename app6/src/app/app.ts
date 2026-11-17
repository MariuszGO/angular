import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  rezerwacje = [
    { id: 1, uczen: 'Anna Kowalska', dzien: 'Poniedzia\u0142ek', godzina: '11:00', stanowisko: 'PC-1' },
    { id: 2, uczen: 'Jan Nowak', dzien: 'Poniedzia\u0142ek', godzina: '8:00', stanowisko: 'PC-2' },
    { id: 3, uczen: 'Maria Lis', dzien: 'Wtorek', godzina: '9:00', stanowisko: 'PC-1' },
    { id: 4, uczen: 'Piotr Mazur', dzien: '\u015aroda', godzina: '10:00', stanowisko: 'PC-3' }
  ];

  wynik = [...this.rezerwacje];
  id = 0;
  imie = '';
  dzien = '';
  stanowisko = '';
  godzina = '';
  komunikat = '';
  dany_d = 'Wszystkie dni';

  dodaj() {
    this.komunikat = '';

    if (!this.imie.trim() || !this.dzien || !this.godzina || !this.stanowisko) {
      this.komunikat = 'Prosz\u0119 uzupe\u0142ni\u0107 pola';
      return;
    }

    const istnieje = this.rezerwacje.some(r =>
      r.dzien === this.dzien &&
      r.godzina === this.godzina &&
      r.stanowisko === this.stanowisko
    );

    if (istnieje) {
      this.komunikat = 'Ten termin jest ju\u017c zaj\u0119ty';
      return;
    }

    this.id = this.rezerwacje.reduce((max, r) => Math.max(max, r.id), 0) + 1;
    const nowaRezerwacja = {
      id: this.id,
      uczen: this.imie.trim(),
      dzien: this.dzien,
      godzina: this.godzina,
      stanowisko: this.stanowisko
    };

    this.rezerwacje.push(nowaRezerwacja);
    if (this.dany_d === 'Wszystkie dni' || this.dany_d === nowaRezerwacja.dzien) {
      this.wynik = [...this.wynik, nowaRezerwacja];
    }

    this.imie = '';
    this.dzien = '';
    this.godzina = '';
    this.stanowisko = '';
  }

  anuluj(id: number) {
    this.rezerwacje = this.rezerwacje.filter(r => r.id !== id);
    this.wynik = this.wynik.filter(r => r.id !== id);
  }

  dany_dzien() {
    this.komunikat = '';
    this.wynik = this.dany_d === 'Wszystkie dni'
      ? [...this.rezerwacje]
      : this.rezerwacje.filter(r => r.dzien === this.dany_d);

    if (this.wynik.length === 0) {
      this.komunikat = 'LISTA PUSTA';
    }
  }

  sortowanie_godzina() {
    this.wynik = [...this.wynik].sort((a, b) =>
      a.godzina.localeCompare(b.godzina, 'pl', { numeric: true })
    );
  }

  sortowanie_godzina1() {
    this.wynik = [...this.wynik].sort((a, b) =>
      b.godzina.localeCompare(a.godzina, 'pl', { numeric: true })
    );
  }

  pc_1(): number {
    return this.rezerwacje.filter(r => r.stanowisko === 'PC-1').length;
  }
}
