import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app1');
  zmienna1: number = 100;
  zmienna1a = 111;
  
  zmienna2: string = "Adam";
  zmienna2a = "Paweł";

  logiczna: boolean = true;



}



/*
// Importujemy potrzebne elementy Angulara.
// Component pozwala utworzyć komponent,
// a FormsModule pozwala korzystać z ngModel w formularzu.
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// @Component to konfiguracja naszego komponentu.
@Component({

  // Nazwa znacznika HTML tego komponentu.
  selector: 'app-root',

  // Informacja, że komponent działa samodzielnie.
  standalone: true,

  // Dodajemy FormsModule, ponieważ będziemy używać ngModel.
  imports: [FormsModule],

  // Plik HTML, który będzie wyświetlany przez ten komponent.
  templateUrl: './app.html',

  // Plik CSS odpowiedzialny za wygląd strony.
  styleUrl: './app.css'
})

// Tworzymy klasę App.
// Klasa przechowuje dane i logikę naszego komponentu.
export class App {

  // Tworzymy zmienną o nazwie zmienna1.
  // Początkowa wartość tej zmiennej to 10.
  zmienna1 = 10;

  // Tworzymy drugą zmienną.
  // Jej początkowa wartość to 20.
  zmienna2 = 20;

}

*/