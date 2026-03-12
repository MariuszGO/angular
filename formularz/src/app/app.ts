import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

//TEST
export class App {
  imie = '';
  nazwisko = '';
  wiek = 0;

  wyslano = false;

  onSubmit() {
    this.wyslano = true;
  }
}