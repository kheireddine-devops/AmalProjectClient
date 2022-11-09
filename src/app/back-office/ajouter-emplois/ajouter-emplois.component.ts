import { Emploi } from '../../core/entities/Emlpoi';
import { Component, OnInit } from '@angular/core';
import { EmploiService } from 'src/app/core/services/emploi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-emplois',
  templateUrl: './ajouter-emplois.component.html',
  styleUrls: ['./ajouter-emplois.component.css']
})
export class AjouterEmploisComponent implements OnInit {
  currentDate:any =new Date(); //curent date
  emploi! : Emploi;

  constructor(private emploiService : EmploiService, private router:Router,private ac: ActivatedRoute) { }
  id:any;
  titrepage:any=""
  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    if(this.id === undefined) {
      this.emploi=new Emploi();
      this.titrepage='Ajouter une nouvelle offre d\'emploi';
    }else {
      this.emploiService.getEmploiById(this.id).subscribe(res=>{
         this.emploi=res;
        this.titrepage = 'Modifier l\offre  d\emploi avec la référence'+res.reference;})
    }
  }
  onSubmit(){
    console.log(this.emploi);
    if(this.id === undefined){
      this.emploiService.addEmploi(this.emploi).subscribe((data)=>this.router.navigateByUrl('/BackOffice/admin/emplois'));
    }else{
      this.emploiService.updateEmploi(this.id,this.emploi).subscribe((data)=>this.router.navigateByUrl('/BackOffice/admin/emplois'));

    }
  }


  }

