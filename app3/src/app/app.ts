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
  protected readonly title = signal('app3');

  zmienna = 150;
  zmienna1: number = 150;
  zmienna2 = "Adam";
  zmienna3 = true;
  //zmienna3: boolean = true;

  moja_funkcja(){
    let nowa_zienna= 230;
    console.log("To nasza zmienna" + nowa_zienna);
    console.log("Zmienna logiczna:" + this.zmienna3);
    this.zmienna3 = !this.zmienna3;
    console.log("Zmienna logiczna po negacji:" + this.zmienna3);
    

  }


}
