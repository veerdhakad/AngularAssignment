import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OperationsService } from './operations.service';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
