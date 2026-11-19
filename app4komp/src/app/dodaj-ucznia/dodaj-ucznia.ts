import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dodaj-ucznia',
  imports: [FormsModule],
  templateUrl: './dodaj-ucznia.html',
  styleUrl: './dodaj-ucznia.css'
})
export class DodajUcznia {

  imie = '';
  nazwisko = '';
  wiek = 0;

  @Output() nowyUczen = new EventEmitter<string>();

  dodaj() {
    const uczen = this.imie + ' ' + this.nazwisko + ' ' + this.wiek;

    this.nowyUczen.emit(uczen);

    this.imie = '';
    this.nazwisko = '';
    this.wiek = 0;
  }
}