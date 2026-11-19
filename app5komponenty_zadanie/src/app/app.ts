import { Component } from '@angular/core';
import { DodajTemat, Temat } from './dodaj-temat/dodaj-temat';

@Component({
  selector: 'app-root',
  imports: [DodajTemat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  tematy: Temat[] = [];

  dodajTemat(temat: Temat) {
    this.tematy.push(temat);
  }

  usunTemat(index: number) {
    this.tematy.splice(index, 1);
  }

  wyczyscPlan() {
    this.tematy = [];
  }

  sumaCzasu(): number {
    return this.tematy.reduce(
      (suma, temat) => suma + temat.czas, 0
    );
  }
}