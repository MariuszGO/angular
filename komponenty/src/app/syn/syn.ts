import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
selector: 'app-syn',
standalone: true,
  templateUrl: './syn.html',
  styleUrl: './syn.css',
})
export class syn {

@Input() zmiennaImport!: string[];

@Output() odpowiedz = new EventEmitter<string>();


 wyslanie() {
 this.odpowiedz.emit('Będę czekał');
 }

}