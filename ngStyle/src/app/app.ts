import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app11');

  fontSize: number = 16;       // domyślna wielkość czcionki
  backgroundColor: string = '#ffffff'; // domyślny kolor tła


  imie: string | null = null;
  nazwisko: string | null = null;
  wiek: number = 0;

  liczby: number[] = Array.from({ length: 150 }, (_, i) => i + 1);


 funkcja(imie:String):String{
    imie = imie + "a";
    console.log(imie);      
    return imie;  
    }


}
