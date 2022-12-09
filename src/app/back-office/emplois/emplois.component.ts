import { Router } from '@angular/router';
import { Emploi } from '../../core/entities/Emlpoi';
import { EmploiService } from '../../core/services/emploi.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { AccountService } from 'src/app/core/services/account.service';
import { RoleEnum } from 'src/app/core/entities/users';
@Component({
  selector: 'app-emplois',
  templateUrl: './emplois.component.html',
  styleUrls: ['./emplois.component.css']
})
export class EmploisComponent implements OnInit {
  [x: string]: any;
  listEmplois: Emploi[]=[];
  p:number=1;
  role: RoleEnum | undefined;
  rol:string | undefined;
  constructor( private accountService: AccountService,private emploiService :EmploiService, private router :Router) { }

  ngOnInit(): void {
    this.role = this.accountService.getRole();
    switch(this.role) {
      case RoleEnum.ADMIN: this.rol = "admin"; break;
      case RoleEnum.ORGANIZATION: this.rol = "organization"; break;
      case RoleEnum.BENEFICIER: this.rol = "beneficiers"; break;
    }


    if (this.role==RoleEnum.ORGANIZATION){
      this.emploiService.getEmploiByCompte().subscribe((data)=>this.listEmplois=data);
    } else {
    this.emploiService.getEmploi().subscribe((data)=>this.listEmplois=data);}
    
  }

  delete(e:Emploi) :void{
    if(window.confirm('Voulez vous supprimer  Offre: '+e.ref_emploi+' ?')){
  this.emploiService.deleteEmploi(e.id_emploi).pipe(first()).subscribe((res=>{
    if(res=='deleted')
    this.emploiService.getEmploi().subscribe((data)=>this.listEmplois=data);
  }));
}
 }
}