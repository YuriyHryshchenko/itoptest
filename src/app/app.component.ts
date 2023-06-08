import { Component, OnInit } from '@angular/core';
import { ConverterService } from './services/converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currency: any = [];
  uahToUsd = 0;
  uahToEur = 0;

  ngOnInit(): void {
    this.converterService.getCurrencies().subscribe((items) => {
      this.currency = items;
      this.currency.forEach((element: { [x: string]: number; rate: number; }) => {
        if(element['r030'] === 840) {
          this.uahToUsd = +element.rate.toFixed(2);
        }
        if(element['r030'] === 978) {
          this.uahToEur = +element.rate.toFixed(2);
        }
      });
    })
  }

  constructor(private converterService: ConverterService){
  }
  title = 'itop-test';
}
