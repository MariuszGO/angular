import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Ksiazka {
  id: number;
  tytul: string;
  autor: string;
  kategoria: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ksiazki: Ksiazka[] = [
    { id: 1, tytul: 'Lalka', autor: 'Bolesław Prus', kategoria: 'Powieść' },
    { id: 2, tytul: 'Hobbit', autor: 'J.R.R. Tolkien', kategoria: 'Fantastyka' },
    { id: 3, tytul: 'Mały Książę', autor: 'Antoine de Saint-Exupéry', kategoria: 'Baśń' }
  ];

  szukaj = '';
  filtrKategorii = 'Wszystkie';
  nowyTytul = '';
  nowyAutor = '';
  nowaKategoria = 'Powieść';
  kategorie = ['Powieść', 'Fantastyka', 'Baśń', 'Nauka'];

  get widoczneKsiazki(): Ksiazka[] {
    const fraza = this.szukaj.trim().toLowerCase();
    return this.ksiazki.filter(k => {
      const pasujeTekst =
        k.tytul.toLowerCase().includes(fraza) ||
        k.autor.toLowerCase().includes(fraza);
      const pasujeKategoria =
        this.filtrKategorii === 'Wszystkie' ||
        k.kategoria === this.filtrKategorii;
      return pasujeTekst && pasujeKategoria;
    });
  }

  dodajKsiazke(): void {
    const tytul = this.nowyTytul.trim();
    const autor = this.nowyAutor.trim();
    if (!tytul || !autor) return;

    const kolejneId = Math.max(0, ...this.ksiazki.map(k => k.id)) + 1;
    this.ksiazki = [
      ...this.ksiazki,
      { id: kolejneId, tytul, autor, kategoria: this.nowaKategoria }
    ];
    this.nowyTytul = '';
    this.nowyAutor = '';
  }

  usunKsiazke(id: number): void {
    this.ksiazki = this.ksiazki.filter(k => k.id !== id);
  }
}