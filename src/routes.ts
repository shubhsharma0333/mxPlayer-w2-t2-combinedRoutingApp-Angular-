import { Routes } from "@angular/router";
import { Component } from "@angular/core";
import { FormValidationComponent } from "./app/form-validation/form-validation.component";
import { BankingAppComponent } from "./app/banking-app/banking-app.component";
import { EmiCalComponent } from "./app/emi-cal/emi-cal.component";
import { CreditCardComponent } from "./app/credit-card/credit-card.component";

export const routes: Routes = [
    {path:"formValidation", component:FormValidationComponent},
    {path:"bankingApp", component:BankingAppComponent},
    {path:"emiCal", component:EmiCalComponent},
    {path:"creditCard", component:CreditCardComponent}
]