import { Component } from '@angular/core';
import { DodajUcznia } from './dodaj-ucznia/dodaj-ucznia';

@Component({
  selector: 'app-root',
  imports: [DodajUcznia],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  uczniowie: string[] = [];

  dodajDoListy(uczen: string) {
    this.uczniowie.push(uczen);
  }
}