import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking-app',
  templateUrl: './banking-app.component.html',
  styleUrls: ['./banking-app.component.css']
})
export class BankingAppComponent implements OnInit {

  account:boolean = false;
  balance:number = 0;
  status=""
  da:any="";
  wa:any ="";
  initialAmount:any = "" ;
  openAccount(){
    if(this.initialAmount >=5000){
      this.balance = this.initialAmount;
      this.account= true;
      this.status = "Bank Account Has been created"
      setTimeout(()=>{
        this.status=""
      }, 4000)
    }else{
      this.status = "Minimum amount required to open bank account is 5000"
      setTimeout(()=>{
        this.status=""
      }, 4000)
    }

  }

  deposite(){
    if(this.account === true){
      this.balance = Number(this.balance) + Number(this.da)
      this.status = "The updated balance is " + this.balance;
      setTimeout(()=>{
        this.status=""
      }, 4000)
    }else{
      this.status= "you need to open the account first"
      setTimeout(()=>{
        this.status=""
      }, 4000)
    }
  }

  withdraw(){
    if(this.account === true){

      if(parseInt(this.wa) < this.balance){
        this.balance = Number(this.balance) - Number(this.wa);
        this.status= "The updated balance is " + this.balance;
        setTimeout(()=>{
          this.status=""
        }, 4000)
      }else{
        this.status= "You don't have sufficient funds, your Balance is "+ this.balance;
      }

    }else{
      this.status= "you need to open the account first"
      setTimeout(()=>{
        this.status=""
      }, 4000)
    }
  }

  


  constructor() { }

  ngOnInit(): void {
  }

}
