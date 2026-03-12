import { Component } from '@angular/core';
import { syn } from './syn/syn';
import { corka } from './corka/corka';


@Component({
selector: 'app-root',
standalone: true,
imports: [syn, corka],
templateUrl: './app.html',
 styleUrl: './app.css',
})
export class App {

zmiennaEksport: string[] = ['17:00', 'pływalnią'];

 onOdpowiedz(otrzymane: string) {
 alert(otrzymane);
 }

}


/*
# Generowanie podstawowego komponentu
ng generate component nazwa-komponentu

# Lub w skrócie:
ng g c nazwa-komponentu

*/