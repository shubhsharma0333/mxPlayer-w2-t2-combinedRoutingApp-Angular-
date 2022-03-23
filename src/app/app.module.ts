import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/routes';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { BankingAppComponent } from './banking-app/banking-app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { EmiCalComponent } from './emi-cal/emi-cal.component';

@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    BankingAppComponent,
    CreditCardComponent,
    EmiCalComponent 
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
