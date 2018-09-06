import { Injectable } from '@angular/core';
import {SBAccount } from '../models/SBAccount';
import { SBTransaction } from '../models/SBTransaction';
@Injectable({
  providedIn: 'root'
})
export class OperationsService {
   accountDetails: SBAccount[];
   transactionDetails: SBTransaction[];
  constructor() {
   this.accountDetails = [];
   this.transactionDetails = [];
  }
  addAccount(acc: SBAccount) {
    this.accountDetails.push(acc);
  }
  getAllAcounts(): SBAccount[] {
    return this.accountDetails;
  }
  getAccountByNumber(accnumber: number): SBAccount {
      let  acc: SBAccount;
       for ( let i = 0; i < this.accountDetails.length; i++) {
          if (this.accountDetails[i].accountNumber == accnumber) {
               acc = this.accountDetails[i];
               break;
          }
      }
       return acc;
  }
   depositeAmount(acc: number, amt: number) {
    for ( let i = 0; i < this.accountDetails.length; i++) {
      if (this.accountDetails[i].accountNumber === acc) {
           this.accountDetails[i].currentAmount = this.accountDetails[i].currentAmount + amt;
           const rand: number = Math.random() * 1000;
           const trid: string = rand + 't' + rand;
           const date = new Date();
           const tdate: string = ' ' + date;
           const trans: SBTransaction = new SBTransaction(trid, acc, tdate, amt, 'D');
          this.transactionDetails.push(trans);
           break;
      }
  }
   }

   withDrawAmount(acc: number, amt: number) {
    for ( let i = 0; i < this.accountDetails.length; i++) {
      if (this.accountDetails[i].accountNumber === acc) {
           this.accountDetails[i].currentAmount = this.accountDetails[i].currentAmount - amt;
           const rand: number = Math.random() * 1000;
           const trid: string = rand + 't' + rand;
           const date = new Date();
           const tdate: string = ' ' + date;
           const trans: SBTransaction = new SBTransaction(trid, acc, tdate, amt, 'W');
          this.transactionDetails.push(trans);
           break;
      }
  }
}
   getTransactions(acc: number): SBTransaction[] {
     let temp: SBTransaction[];
    for ( let i = 0; i < this.transactionDetails.length; i++) {
      if (this.transactionDetails[i].transactionAccount === acc) {
           temp.push(this.transactionDetails[i]);
      }
      return temp;
  }
}

}
