<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
=======
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface lisss{
  id:number;
  text:string;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
>>>>>>> f97bb84e9a6926807ec029d7d628f3a136a96e8b
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
<<<<<<< HEAD
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
=======
  protected readonly title = signal('aplikacja_web');
  imie_i_nazwisko:string = "";
  nr_kursu:number = 0;
  lista:lisss[] = [
    {id:1,text:"Programowanie w C#"},
    {id:2,text:"Angular dla początkujących"},
    {id:3,text:"Kurs Django"}
  ]

  tja(){
    if(this.imie_i_nazwisko != "")
    {
      if (this.nr_kursu - 1 < this.lista.length && this.nr_kursu - 1 >= 0) {
        console.log(this.imie_i_nazwisko);
        console.log(this.lista[this.nr_kursu - 1].text);
      }else{
        console.log("nieprawidłowy nr kurs");
      }
    }


>>>>>>> f97bb84e9a6926807ec029d7d628f3a136a96e8b
  }
}
