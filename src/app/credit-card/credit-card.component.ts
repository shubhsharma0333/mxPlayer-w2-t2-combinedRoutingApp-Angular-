import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  salary:any="";
  status:string="";

  check(){
    if(this.salary < 20000){
      this.status= "Sorry But you are not eligible for any card :("
    }
    else if(this.salary >= 20000 && this.salary <30000){
      this.status = "You are eligible for silver card"
    }
    else if(this.salary >= 30000 && this.salary <40000){
      this.status = "You are eligible for gold card"
    }
    else{
      this.status = "you are eligible fot platinum card"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
