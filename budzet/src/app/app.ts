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
  szukaj:string ="";
  wszystkie:boolean = true;
  oplacone:boolean = true;
  dozaplaty:boolean =true;

  wydatek: { 
    nazwa: string, 
    kategoria: string, 
    kwota: number, 
    oplacony: boolean, 
    data: Date 
  } = {
  nazwa: "", 
  kategoria: "",
  kwota: 0,
  oplacony: false,
  data: new Date()
};

wydatki: {
  nazwa: string,
  kategoria: string,
  kwota: number,
  oplacony: boolean,
  data: Date
}[] = [{nazwa: "Paliwo", kategoria: "Transport", kwota: 180, oplacony: true, data: new Date("2026.01.02")}];

dodajWydatek() {
  this.wydatki.push(this.wydatek);

  this.wydatek = {
    nazwa: "",
    kategoria: "",
    kwota: 0,
    oplacony: false,
    data: new Date()
  };
}

pokaz_wszystkie(){
  this.wszystkie = true;
  this.oplacone = false;
  this.dozaplaty = false;
}

pokaz_oplacone(){
  this.wszystkie = false;
  this.oplacone = true;
  this.dozaplaty = false;
}

pokaz_dozaplaty(){
  this.wszystkie = false;
  this.oplacone = false;
  this.dozaplaty = true;
}


}




