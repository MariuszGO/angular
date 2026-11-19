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


  fontSize: number = 16;       // domyślna wielkość czcionki
  backgroundColor: string = '#ffffff'; // domyślny kolor tła


  imie: string = "";
  nazwisko: string= "";
  wiek: number = 0;
  wiek1: number = 0;
  liczby1 = [1,2];

  liczby: number[] = Array.from({ length: 150 }, (_, i) => i + 1);

  ngOnInit(){
    this.dodaj();
  }

dodaj(){
    for(let i=1;i<=150;i++){
      this.liczby1.push(i);
    }
  }

  

 funkcja(imie:String):String{
    imie = imie + "a";
    console.log(imie);      
    return imie;  
    }


}
