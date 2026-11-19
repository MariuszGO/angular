import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imie: string = '';
  nazwisko: string = '';
  ulica: string = '';
  numerDomu: string = '';
  kodPocztowy: string = '';
  miejscowosc: string = '';
  wiek: number | null = null;
  regulamin: boolean = false;

  komunikatSukcesu: string = '';

  poprawneImie(): boolean {
    return this.imie.trim().length >= 3;
  }

  poprawneNazwisko(): boolean {
    return this.nazwisko.trim().length >= 2;
  }

  poprawnaUlica(): boolean {
    return this.ulica.trim().length >= 3;
  }

  poprawnyNumerDomu(): boolean {
    return this.numerDomu.trim().length > 0;
  }

  poprawnyKodPocztowy(): boolean {
    return /^\d{2}-\d{3}$/.test(this.kodPocztowy.trim());
  }

  poprawnaMiejscowosc(): boolean {
    return this.miejscowosc.trim().length >= 2;
  }

  poprawnyWiek(): boolean {
    return this.wiek !== null &&
           Number.isInteger(this.wiek) &&
           this.wiek >= 16 &&
           this.wiek <= 30;
  }

  czyFormularzPoprawny(): boolean {
    return this.poprawneImie() &&
           this.poprawneNazwisko() &&
           this.poprawnaUlica() &&
           this.poprawnyNumerDomu() &&
           this.poprawnyKodPocztowy() &&
           this.poprawnaMiejscowosc() &&
           this.poprawnyWiek() &&
           this.regulamin;
  }

  zarejestruj(): void {
    // Kontrola również po stronie kodu, a nie tylko w przycisku.
    if (!this.czyFormularzPoprawny()) {
      return;
    }

    this.komunikatSukcesu =
      `Zarejestrowano: ${this.imie.trim()} ${this.nazwisko.trim()}`;

    this.imie = '';
    this.nazwisko = '';
    this.ulica = '';
    this.numerDomu = '';
    this.kodPocztowy = '';
    this.miejscowosc = '';
    this.wiek = null;
    this.regulamin = false;
  }
}
