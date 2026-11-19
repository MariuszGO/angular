import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-produkty',
  imports: [],
  templateUrl: './produkty.html',
  styleUrl: './produkty.css',
})
export class Produkty {
  @Input() imie = '';
  @Input() nazwisko = '';
  @Input() wiek = 0;

  liczba: number = 100;
  zmienna = 0;
  suma(){
    this.zmienna = this.wiek + 10;
  }

}
