import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  rezerwacje = [{
                 id: 1, 
                 uczen: 'Anna Kowalska', 
                 dzien: 'Poniedziałek',
                 godzina: '11:00', 
                 stanowisko: 'PC-1'
                },
                 {
                 id: 2, 
                 uczen: 'Jan Nowak', 
                 dzien: 'Poniedziałek',
                 godzina: '8:00', 
                 stanowisko: 'PC-2'
                },
                {
                 id: 3, 
                 uczen: 'Maria Lis', 
                 dzien: 'Wtorek',
                 godzina: '9:00', 
                 stanowisko: 'PC-1'
                },
                 {
                 id: 4, 
                 uczen: 'Piotr Mazur', 
                 dzien: 'Środa',
                 godzina: '10:00', 
                 stanowisko: 'PC-3'
                }
  ]
wynik = this.rezerwacje;

id: number = 0;
imie: string = '';
dzien: string = '';
stanowisko: string = '';
godzina: string = '';
komunikat: string = '';

dodaj() {
  this.id = this.rezerwacje.reduce((max, r) => Math.max(max, r.id), 0) + 1;
  this.komunikat = '';
  if(this.imie.trim() != '' && this.dzien != '' && this.godzina != '' && this.stanowisko !=''){

  this.rezerwacje.push({
    id: this.id,
    uczen: this.imie,
    dzien: this.dzien,
    godzina: this.godzina,
    stanowisko: this.stanowisko
  });
} else
{
  this.komunikat = "Proszę usupełnić pola";
}

}

anuluj(id: number){
  this.rezerwacje = this.rezerwacje.filter(r => r.id !== id);
}

// Wariant z użyciem splice:
// anuluj(id: number) {
//   const index = this.rezerwacje.findIndex(r => r.id === id);
//   if (index !== -1) {
//     this.rezerwacje.splice(index, 1);
//   }
// }

dany_d: string = '';

dany_dzien(){
this.wynik = this.rezerwacje;
if(this.dany_d != "Wszystkie dni"){
  this.wynik = this.wynik.filter(r => r.dzien == this.dany_d);
  } 
  else{
    console.log("Wszyskie dni");
  }

}


sortowanie_godzina(){
this.wynik = this.rezerwacje;

  this.wynik = this.wynik.sort();
 

}


}
