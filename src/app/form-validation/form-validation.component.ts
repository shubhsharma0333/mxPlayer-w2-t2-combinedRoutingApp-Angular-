import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  user:any={}
  submit() {
    alert(JSON.stringify(this.user))  
  }

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
