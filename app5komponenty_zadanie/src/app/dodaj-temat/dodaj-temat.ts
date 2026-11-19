import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Temat {
  nazwa: string;
  czas: number;
}

@Component({
  selector: 'app-dodaj-temat',
  imports: [FormsModule],
  templateUrl: './dodaj-temat.html',
  styleUrl: './dodaj-temat.css'
})
export class DodajTemat {

  nazwa = '';
  czas: number | null = null;

  @Output() tematDodany = new EventEmitter<Temat>();

  dodaj() {
    if (this.nazwa.trim() === '' || this.czas === null || this.czas < 15 || this.czas > 360) {
      return;
    }

    const temat: Temat = {
      nazwa: this.nazwa.trim(),
      czas: this.czas
    };

    this.tematDodany.emit(temat);

    this.nazwa = '';
    this.czas = null;
  }
}