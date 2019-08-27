import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {
  Versuchskaninchen: number = 13;
  Testanzahl: number ;
  Ergebnis= 'Ergebnis noch nicht berechnet' ;

  constructor() { }

fermattest() {
  this.Ergebnis = 'Starte Fermat-Test der Zahl '
  + this.Versuchskaninchen + '... ';
let zeuge = 2; 
// Berechne zeuge^(Versuchskaninchen-1) modulo Versuchskaninchen 
let zwischenergebnis = 1;
for(let i = 0; i < this.Versuchskaninchen-1; i++) { 
zwischenergebnis = zwischenergebnis * zeuge; 
 }
zwischenergebnis = zwischenergebnis % this.Versuchskaninchen; 
if(zwischenergebnis === 1) {
this.Ergebnis += 'Zeuge ' + zeuge + ' OK... ';
} else {
  this.Ergebnis += 'Zeuge ' + zeuge + 'NICHT OK! ';
}
}

  ngOnInit() {
  }

}