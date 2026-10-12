import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',       
  imports: [FormsModule],     
  templateUrl: './app.html',  
  styleUrl: './app.css'       
})
export class App {

  
  imie = '';
  nazwisko = '';
  wiek = 0;
  ulica = '';
  nr = 0;
  miejscowosc = '';

  // Tablica przechowująca osoby pobrane z MongoDB
  osoby: any[] = [];


  // Konstruktor - otrzymujemy dostęp do HttpClient
  // Po utworzeniu komponentu pobieramy dane z serwera
  constructor(private http: HttpClient) {
    this.pobierz();
  }


  // ------------------------------------
  // POBIERANIE OSÓB Z BAZY DANYCH
  // ------------------------------------

  pobierz() {

    // Wysyłamy żądanie GET do serwera Express
    this.http.get<any[]>('http://localhost:3000/osoby')

      // subscribe() odbiera odpowiedź z serwera
      .subscribe(dane => {

        // Przypisujemy pobrane osoby do tablicy
        this.osoby = dane;

      });
  }


  // ------------------------------------
  // DODAWANIE NOWEJ OSOBY
  // ------------------------------------

  dodaj() {

    // Tworzymy obiekt z danymi wpisanymi w formularzu
    const osoba = {
      imie: this.imie,
      nazwisko: this.nazwisko,
      wiek: this.wiek,
      ulica: this.ulica,
      nr: this.nr,
      miejscowosc: this.miejscowosc
    };

    // Wysyłamy obiekt osoba do serwera metodą POST
    this.http.post('http://localhost:3000/osoby', osoba)

      // Po poprawnym zapisaniu osoby wykonujemy poniższy kod
      .subscribe(() => {

        // Ponownie pobieramy wszystkie osoby z bazy
        // Dzięki temu nowa osoba pojawi się w tabeli
        this.pobierz();

        // Czyścimy pola formularza
        this.imie = '';
        this.nazwisko = '';
        this.wiek = 0;
        this.ulica = '';
        this.nr = 0;
        this.miejscowosc ='';

      });
  }


  
 // ------------------------------------
 // USUWANIE OSOBY Z BAZY DANYCH
 // ------------------------------------

 usun(id: string) {

   // Wysyłamy żądanie DELETE do serwera
   // W adresie przekazujemy identyfikator osoby
   this.http.delete('http://localhost:3000/osoby/' + id).subscribe(() => {this.pobierz();});
 }


}
