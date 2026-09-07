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
  wygeneruj: boolean = true;

  adres_widok: string = '';
  login_widok: string = '';
  haslo_widok: string = '';



  zapisz() {

    this.adres_widok =  this.adres;
    this.login_widok  = this.login;
    
    if(this.wygeneruj==true){
                            this.haslo_widok='automatycznie generowane';
                            }
                            else{
                                  this.haslo_widok = this.haslo;
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

}
