import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

imie: string = "";
email: string = "";
imie_w: string = "";
email_w: string = "";
sprawdzanie: boolean =false;
ilosc:number=0;
suma:number=0;
rabat: number=0;

warsztaty = [{nazwa: "Tworzenie stron www" , cena: 90, zaznaczony: false},
              {nazwa: "Grafika komputerowa" , cena: 110, zaznaczony: false},
              {nazwa: "Programowanie w Pythonie" , cena: 140, zaznaczony: false},
              {nazwa: "Bazy danych SQL" , cena: 100, zaznaczony: false},
              {nazwa: "Tworzenie stron www" , cena: 90, zaznaczony: false},
              {nazwa: "Aplikacje mobilne" , cena: 160, zaznaczony: false}
]

warsztaty_w [] =[];

wypisz(){
this.ilosc = 0;
this.suma = 0;
this.rabat =0;
this.imie_w = this.imie;
this.email_w = this.email;
this.sprawdzanie = true;
for(let zm of this.warsztaty){
  if(zm.zaznaczony){
    this.ilosc++;
    this.suma += zm.cena; 
  }

  if(this.suma >= 250){
    this.rabat = this.suma - (this.suma*0.25);
  }

}


}


}
