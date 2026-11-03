import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';

interface Zadanie {
  id: number;
  nazwa: string;
  wykonane: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIcon
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  nowaNazwa = '';

  zadania: Zadanie[] = [
    { id: 1, nazwa: 'Nauka Angular', wykonane: true },
    { id: 2, nazwa: 'Poznanie Material', wykonane: false },
    { id: 3, nazwa: 'Zrobienie projektu', wykonane: false }
  ];

  dodaj(): void {
    const nazwa = this.nowaNazwa.trim();

    if (nazwa === '') return;

    const noweId = Math.max(
      0, ...this.zadania.map(z => z.id)
    ) + 1;

    this.zadania.push({
      id: noweId,
      nazwa: nazwa,
      wykonane: false
    });

    this.nowaNazwa = '';
  }

  usun(id: number): void {
    this.zadania = this.zadania.filter(
      z => z.id !== id
    );
  }

  get wykonane(): number {
    return this.zadania.filter(z => z.wykonane).length;
  }
}

