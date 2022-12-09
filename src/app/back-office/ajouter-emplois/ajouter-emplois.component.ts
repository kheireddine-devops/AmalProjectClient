import { Emploi } from '../../core/entities/Emlpoi';
import { Component, OnInit } from '@angular/core';
import { EmploiService } from 'src/app/core/services/emploi.service';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { first } from 'rxjs';
@Component({
  selector: 'app-ajouter-emplois',
  templateUrl: './ajouter-emplois.component.html',
  styleUrls: ['./ajouter-emplois.component.css']
})
export class AjouterEmploisComponent implements OnInit {
  currentDate:any =new Date(); //curent date
  emploi : Emploi =new Emploi;

  constructor(private emploiService : EmploiService, private router:Router,private ac: ActivatedRoute) { }
  id:any;
  titrepage:any="";
  token:any = localStorage.getItem('token');
  isAdmin=false;
  tokenArray:any;
  organisations = [];

  ngOnInit(): void {
    this.tokenArray = jwt_decode(this.token);
    this.id = this.ac.snapshot.params['id'];

    if(this.tokenArray.role=='ROLE_ADMIN'){
      this.emploiService.getOrganisations().pipe(first()).subscribe((res) => {
        this.organisations = res 
        console.log(res)
      });
      
      this.isAdmin = true;
    }


    if(this.id === undefined) {
      this.emploi=new Emploi();
      this.titrepage='Ajouter une nouvelle offre d\'emploi';
    }else {
      this.emploiService.getEmploiById(this.id).subscribe(res=>{
         this.emploi=res;
        this.titrepage = 'Modifier l\offre  d\emploi avec la référence'+res.ref_emploi;})
    }
  }
  onSubmit(){


    //console.log(this.emploi);
    if(this.id === undefined){
    this.emploiService.addEmploi(this.emploi).subscribe((data)=>{
    //this.router.navigateByUrl('/BackOffice/admin/emplois')

    if (this.isAdmin){
      this.router.navigateByUrl('/BackOffice/admin/emplois')
     }else{
       this.router.navigateByUrl('/BackOffice/organization/emplois')
     }
     });


    }else{
      
      this.emploiService.updateEmploi(this.id,this.emploi).subscribe((data)=> 
      {
        if (this.isAdmin){
       this.router.navigateByUrl('/BackOffice/admin/emplois')
      }else{
        this.router.navigateByUrl('/BackOffice/organization/emplois')
      }
     });

    }
  }

  
  }

