import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {
  Versuchskaninchen: number = 13;
  Testanzahl: number ;
  Ergebnis= "Ergebnis noch nicht berechnet" ;

  constructor() { }

  ngOnInit() {
  }

}