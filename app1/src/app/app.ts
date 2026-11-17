import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface lisss{
  id:number;
  text:string;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aplikacja_web');
  imie_i_nazwisko:string = "";
  nr_kursu:number = 0;
  lista:lisss[] = [
    {id:1,text:"Programowanie w C#"},
    {id:2,text:"Angular dla początkujących"},
    {id:3,text:"Kurs Django"}
  ]

  tja(){
    if(this.imie_i_nazwisko != "")
    {
      if (this.nr_kursu - 1 < this.lista.length && this.nr_kursu - 1 >= 0) {
        console.log(this.imie_i_nazwisko);
        console.log(this.lista[this.nr_kursu - 1].text);
      }else{
        console.log("nieprawidłowy nr kurs");
      }
    }


  }
}
