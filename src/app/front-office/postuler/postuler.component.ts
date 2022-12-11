import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidature } from 'src/app/core/entities/Candidature';
import { CandidatureService } from 'src/app/core/services/candidature.service';
import { DataTransferService } from 'src/app/core/services/data-transfer.service';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  titrepage:any="Postuler "
  currentDate:any =new Date().getTime(); //curent date
  //modifierDate! : Date;
  
  
  candidature : Candidature = new Candidature();
  
  constructor(public dataTransferService :DataTransferService ,private candidatureService : CandidatureService, private router:Router,private ac: ActivatedRoute) { }
  
  ngOnInit(): void {
    //console.log(this.dataTransferService.data)
    this.candidature.id_compte=3;
    this.candidature.id_emploi= this.dataTransferService.data.id_emploi;
    this.candidature.date_candidature=this.currentDate;

    //this.candidature.url_cv="urltest.pnj";


    // this.candidature.message="test add";
    // this.candidature.niveau="BTS";

    console.log(this.candidature)

    // console.log("***************** candidature id_compte"+this.candidature.id_compte)
    // console.log("***************** candidature id_emploi"+this.candidature.id_emploi)
    // console.log("***************** candidature date_candidature"+this.candidature.date_candidature)
    // console.log("***************** candidature url_cv"+this.candidature.url_cv)
    // console.log("***************** candidature message"+this.candidature.message)
    // console.log("***************** candidature niveau"+this.candidature.niveau)
   }
  onSubmit(){
    console.log(this.dataTransferService.data)
    console.log("***************** candidature url_cv"+this.candidature.url_cv)
    if(this.cv !== undefined) {
      this.candidatureService.addCandidature(this.candidature,this.cv).subscribe((data)=>this.router.navigateByUrl('/FrontOffice/tousemplois'));
    }
  }

  cv?: File;
  selectFile(event: any) {
    this.cv = event.target.files.item(0);
    console.log(this.cv);

  }
}



