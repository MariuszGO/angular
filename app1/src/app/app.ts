// SEBASTIAN_LUDWIN
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sprawdzian');
  id2 = 4;
  nazwa2 = "";
  wykonane2 = false;
  filtr = "wszystkie";
  zadania = [
    {id: 1, nazwa: 'Projekt interfejsu', wykonane: false},
    {id: 2, nazwa: 'Testowanie aplikacji', wykonane: true},
    {id: 3, nazwa: 'Formularz logowanie', wykonane: false},
    {id: 4, nazwa: 'Ekran ustawień', wykonane: true}
  ]
  
/* 
nazwa: dodajZadanie
opis działania: Funkcja dodaje zadanie do listy zadania
funkcja przyjmuje parametry od użytkownika id2, nazwa2, wykonane2 i przpisuje je do nowego 
zadania w liście zadania oraz dodaje to nowe zadanie z nowymi parametrami do listy
*/

    dodajZadanie(){
    this.zadania.push({id: this.id2, nazwa: this.nazwa2, wykonane: this.wykonane2})
    this.id2 = this.id2+1;
    this.nazwa2 = "";
    this.wykonane2 = false;
    }

}
