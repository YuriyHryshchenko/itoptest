import { Component, Input } from "@angular/core";

@Component({
	selector: 'app-converter',
	templateUrl: './converter.component.html',
	styleUrls: ['./converter.componennt.scss']
})

export class ConverterComponent{
	@Input() currencyUsd: number
	@Input() currencyEur: number

	convertedCurr: number = 0;
	curr: number = 0;
	selectedCurr1 = 'UAH';
	selectedCurr2 = 'USD';

	getCurr() {
		switch(this.selectedCurr1) {
			case 'UAH': 
			console.log(this.convertedCurr);
				if(this.selectedCurr2 === 'USD' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.convertedCurr = this.curr / this.currencyUsd;
				} else if (this.selectedCurr2 === 'EUR' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.convertedCurr = this.curr / this.currencyEur;
				} else if (!isNaN(this.curr) && !isNaN(this.convertedCurr)){
					this.convertedCurr = this.curr;
				}
				break;
			case 'USD':
				if(this.selectedCurr2 === 'UAH' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.convertedCurr = this.curr * this.currencyUsd;
				} else if (this.selectedCurr2 === 'EUR' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.convertedCurr = this.curr * (this.currencyUsd / this.currencyEur);
				} else if (!isNaN(this.curr) && !isNaN(this.convertedCurr)){
					this.convertedCurr = this.curr;
				}
				break;
			
			case 'EUR': 
				if(this.selectedCurr2 === 'UAH' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.convertedCurr = this.curr * this.currencyEur;
				} else if (this.selectedCurr2 === 'USD' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.convertedCurr = this.curr * (this.currencyEur / this.currencyUsd);
				} else if (!isNaN(this.curr) && !isNaN(this.convertedCurr)){
					this.convertedCurr = this.curr;
				}
				break;
			default:
				
		}
	}
	getConvertedCurr(){
		switch(this.selectedCurr2) {
			case 'UAH': 
				if(this.selectedCurr1 === 'USD' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.curr = this.convertedCurr / this.currencyUsd;
				} else if (this.selectedCurr1 === 'EUR' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.curr = this.convertedCurr / this.currencyEur;
				} else if (!isNaN(this.curr) && !isNaN(this.convertedCurr)){
					this.curr = this.convertedCurr;
				}
				break;
			case 'USD':
				if(this.selectedCurr1 === 'UAH' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.curr = this.convertedCurr * this.currencyUsd;
				} else if (this.selectedCurr1 === 'EUR' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.currencyUsd = this.convertedCurr * (this.currencyUsd / this.currencyEur);
				} else if (!isNaN(this.curr) && !isNaN(this.convertedCurr)){
					this.curr = this.convertedCurr;
				}
				break;
			
			case 'EUR': 
				if(this.selectedCurr1 === 'UAH' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.curr = this.convertedCurr * this.currencyEur;
				} else if (this.selectedCurr1 === 'USD' && !isNaN(this.curr) && !isNaN(this.convertedCurr)) {
					this.curr = this.convertedCurr * (this.currencyEur / this.currencyUsd);
				} else if (!isNaN(this.curr) && !isNaN(this.convertedCurr)){
					this.curr = this.convertedCurr;
				}
				break;
			default:
	}
}
}	
