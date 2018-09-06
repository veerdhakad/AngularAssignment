import { Component, OnInit } from '@angular/core';
import { OperationsService} from '../operations.service';
import { SBAccount } from '../../models/SBAccount';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private operSrv: OperationsService) { }
  allAcc: SBAccount[] ;
  ngOnInit() {
      this.allAcc = this.operSrv.getAllAcounts();
  }
  newAccount(no: HTMLInputElement, name: HTMLInputElement , add: HTMLInputElement , crtamt: HTMLInputElement){
    const  ano: number = parseInt(no.value);
    const aname: string = name.value;
    const aadd: string = add.value;
    const acramt: number = parseInt(crtamt.value);
    const nAcc: SBAccount = new SBAccount(ano, aname, aadd, acramt);
    this.operSrv.addAccount(nAcc);
    console.log(aadd);
    console.log(nAcc);
    name.value = '';
     add.value = '';
     crtamt.value = '' ;
     no.value = '';
  }
  searchAccount(no: HTMLInputElement, name: HTMLInputElement , add: HTMLInputElement , crtamt: HTMLInputElement){
    const  ano: number = parseInt(no.value);
    const acDt: SBAccount = this.operSrv.getAccountByNumber(ano);
     name.value = acDt.accontHolderName;
     add.value = acDt.address;
     crtamt.value = '' + acDt.currentAmount;
  }
}
