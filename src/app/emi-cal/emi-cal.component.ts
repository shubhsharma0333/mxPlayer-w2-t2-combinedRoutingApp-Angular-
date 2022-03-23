import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-cal',
  templateUrl: './emi-cal.component.html',
  styleUrls: ['./emi-cal.component.css']
})
export class EmiCalComponent implements OnInit {
  principleAmt = 0;
  interestRate= 0;
  tenure=0;
  totalAmt=0;
  not = "";
  emi(){
    let rate= this.interestRate/1200;
    let part = Math.pow((1+rate), this.tenure*12);

    let emi = Math.round(this.principleAmt*rate*part/(part - 1));
    return this.totalAmt = emi *12;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
