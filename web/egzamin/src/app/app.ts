import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  adres: string = '';
  login: string = '';
  haslo: string = '';
  haslo_form: string = '';
  wygeneruj: boolean = true;

  adres_widok: string = '';
  login_widok: string = '';
  haslo_widok: string = '';

  litery_duze: string[]= ["A","B","C","D","E","F"];
  litery_male: string[]= ["a","b","c","d","e","f"];
  litera: number = 1;
  

 
  zapisz() {
    this.losuj();
    this.adres_widok =  this.adres;
    this.login_widok  = this.login;

    
    if(this.wygeneruj==true){
                            this.haslo_widok= this.haslo;
                            }
                            else{
                                  this.haslo_widok = this.haslo_form;
                                }
  }

  wyczysc(){
    this.adres = '';
    this.login = '';
    this.haslo = '';
    this.wygeneruj = true;
    this.adres_widok = '';
    this.login_widok = '';
    this.haslo_widok = '';
  }

  losuj(){
    this.haslo ="";
    let litera;
    for(let i=0 ; i<3 ; i++){
                            litera = Math.floor(Math.random()*3);
                            this.haslo = this.haslo + this.litery_duze[litera];
                            }

    for(let i=0 ; i<3 ; i++){
                            litera = Math.floor(Math.random()*3);
                            this.haslo = this.haslo + this.litery_male[litera];
                            }

    let tablica = this.haslo.split('');
    let tmp = '';
    for(let i=0 ; i<6; i++){
                            litera = Math.floor(Math.random()*7);

                            tmp = tablica[litera];
                            tablica[litera] = tablica[i];
                            tablica[i] = tmp;
                          }
    this.haslo = tablica.join('');

    console.log(this.haslo);
  
}

}
