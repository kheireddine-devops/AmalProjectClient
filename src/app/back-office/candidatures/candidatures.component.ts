import { RoleEnum } from './../../core/entities/users';
import { AccountService } from './../../core/services/account.service';


import { CandidatureService } from './../../core/services/candidature.service';
import { Candidature } from './../../core/entities/Candidature';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DataTransferService } from 'src/app/core/services/data-transfer.service';
import { ShowPDFPopUpComponent } from '../show-pdf-pop-up/show-pdf-pop-up.component';

@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {
  listCandidatures: any[]=[];
  p:number=1;
  role: RoleEnum | undefined;
  constructor(private accountService: AccountService,private candidatureService : CandidatureService,private router :Router,private dialogRef :MatDialog,private dataTransferService:DataTransferService) { }

  ngOnInit(): void {
    this.role = this.accountService.getRole();
    if (this.role== RoleEnum.ADMIN){
      this.candidatureService.getCandidature().subscribe((data)=>this.listCandidatures=data);
   
    } else if(this.role== RoleEnum.ORGANIZATION){
      this.candidatureService.getCandidatureByOrganisation().subscribe((data)=>this.listCandidatures=data);
    }
    else{
    this.candidatureService.getCandidatureByCompte().subscribe((data)=>this.listCandidatures=data);}
   

  }

  delete(c:Candidature) :void{
    this.candidatureService.deleteCandidature(c.id_emploi,c.id_compte).subscribe((res=>{
     // if(res=='deleted')
      console.log( "this is the result from candidature component"+res)
      this.ngOnInit()
    }));
  }
  showPDF(c: Candidature){
    this.dataTransferService.data=c;
    this.dialogRef.open(ShowPDFPopUpComponent)
  }
}
