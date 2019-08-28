import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {
  Versuchskaninchen: number = 13;
  Testanzahl: number = 3;
  Ergebnis = 'Ergebnis noch nicht berechnet';

  constructor() { }

  fermattest() {
    this.Ergebnis = 'Starte Fermat-Test der Zahl '
      + this.Versuchskaninchen + ' ... ';
    for (let zeuge = 2; zeuge < this.Testanzahl + 2; zeuge++) {

      let endergebnis = true;

      // Berechne zeuge^(Versuchskaninchen-1) modulo Versuchskaninchen 
      let zwischenergebnis = 1;
      for (let i = 0; i < this.Versuchskaninchen - 1; i++) {
        zwischenergebnis = zwischenergebnis * zeuge;
      }
      zwischenergebnis = zwischenergebnis % this.Versuchskaninchen;
      if (zwischenergebnis === 1) {
        this.Ergebnis += 'Zeuge ' + zeuge + ' OK... ';
      } else {
        this.Ergebnis += 'Zeuge ' + zeuge + 'NICHT OK! ';
        endergebnis = false;

      } 
        if (endergebnis === true) { this.Ergebnis += 'Test bestanden'; }
        else { this.Ergebnis += 'Test nicht bestanden'; }
    }
  }

  ngOnInit() {
  }

}