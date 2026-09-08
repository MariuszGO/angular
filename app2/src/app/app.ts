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
  protected readonly title = signal('app2');

  zmienna = 100;
  zmienna1: number = 100.90;
  nasz_tekst: string = "Dzień dobry";
  zmienna_logiczna: boolean = true;
  uczniowie: string[] = ["Adam","Jan","Krzysztof","Paweł"];







  nowa_funkcja(){
      let nowa_zmienna = 122;
      this.zmienna = this.zmienna + nowa_zmienna;
      this.zmienna_logiczna = !this.zmienna_logiczna;
      console.log(this.zmienna);
      this.uczniowie.push("Karol");
  }




}
