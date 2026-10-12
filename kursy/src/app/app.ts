import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  imieNazwisko: string = "";
  email: string = "";
  imie1: string="";
  email1: string="";
  tmp: boolean = false;
  suma: number = 0;
  ilosc: number = 0;
  sumarabat: number = 0;

  kursy = [ {nazwa: "JavaScript", cena: 120, czyZaznaczone: false},
            {nazwa: "TypeScript", cena: 150, czyZaznaczone: false},
            {nazwa: "Python", cena: 130, czyZaznaczone: false},
            {nazwa: "Java", cena: 160, czyZaznaczone: false },
            {nazwa: "C#", cena: 170, czyZaznaczone: false}
          ]       

  zapisz(){
    this.tmp=true;
    this.imie1 = this.imieNazwisko;
    this.email1 = this.email;
    this.ilosc = 0;
    this.suma = 0;

    for(let kurs of this.kursy){
       if(kurs.czyZaznaczone == true){
        this.ilosc++;
      this.suma = this.suma + kurs.cena;
    }
  }

  if(this.ilosc >= 3){
    this.sumarabat = this.suma - (this.suma * 0.25);
  }

   
  }



}
