import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatLabel } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MatInput,MatLabel,MatFormField,MatIcon],
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
  telefon: string = '';
  wiek: number | null = null;
  regulamin: boolean = false;

  komunikatSukcesu: string = '';
  adres:string = '';

  poprawnyTelefon(): boolean{
    return /^\d{3}-\d{3}-\d{3}$/.test(this.telefon.trim()) || /^\d{9}$/.test(this.telefon.trim());
  }

  poprawneImie(): boolean {
    
    return /^[a-zA-ZąćęłńóśźżĄĘĆŁŃÓŚŹŻ]{3,}$/.test(this.imie.trim());
    
  }

  poprawneNazwisko(): boolean {
    return /^[a-zA-ZąćęłńóśźżĄĘĆŁŃÓŚŹŻ]{3,}$/.test(this.nazwisko.trim());
  }

  poprawnaUlica(): boolean {
    return /^[A-Za-ząćęłńóśźżĄĘĆŁŃÓŚŹŻ0-9-]{3,}$/.test(this.ulica.trim());
  }

  poprawnyNumerDomu(): boolean {
    return /^[a-zA-Z0-9/]{1,5}$/.test(this.numerDomu.trim());
  }

  poprawnyKodPocztowy(): boolean {
    return /^\d{2}-\d{3}$/.test(this.kodPocztowy.trim());
  }

  poprawnaMiejscowosc(): boolean {
    return /^[A-Za-ząćęłńóśźżĄĘĆŁŃÓŚŹŻ-]{3,}$/.test(this.miejscowosc.trim());
  }

  poprawnyWiek(): boolean {
    return this.wiek !== null &&
           Number.isInteger(this.wiek) &&
           this.wiek >= 1 &&
           this.wiek <= 99;
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

  test():void{
    this.imie = 'Jan';
    this.nazwisko = 'Kowalski';
    this.ulica = '3-Maja';
    this.numerDomu = '22/33';
    this.kodPocztowy = '38-300';
    this.miejscowosc = 'Gorlice';
    this.telefon = '514-254-998';
    this.wiek = 22;
    this.regulamin = true;
    console.log(this.imie);

  }

  zarejestruj(): void {
    // Kontrola również po stronie kodu, a nie tylko w przycisku.
    if (!this.czyFormularzPoprawny()) {
      return;
    }

    this.komunikatSukcesu =
      `Zarejestrowano: ${this.imie.trim()} ${this.nazwisko.trim()}`;

    this.adres = `Adres: ${this.miejscowosc.trim()} ${this.kodPocztowy.trim()} ${this.ulica.trim()} ${this.numerDomu.trim()}`;


    this.imie = '';
    this.nazwisko = '';
    this.ulica = '';
    this.numerDomu = '';
    this.kodPocztowy = '';
    this.miejscowosc = '';
    this.telefon = '';
    this.wiek = null;
    this.regulamin = false;
  }
}
