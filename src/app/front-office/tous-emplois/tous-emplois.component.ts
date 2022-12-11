import { DataTransferService } from './../../core/services/data-transfer.service';
import { EmploiService } from '../../core/services/emploi.service';
import { Component, OnInit } from '@angular/core';
import { Emploi } from 'src/app/core/entities/Emlpoi';
import { first } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EmploiDetailPopupComponent } from '../emploi-detail-popup/emploi-detail-popup.component';
@Component({
  selector: 'app-tous-emplois',
  templateUrl: './tous-emplois.component.html',
  styleUrls: ['./tous-emplois.component.css']
})
export class TousEmploisComponent implements OnInit {
  tousEmplois: any[]=[];
  compte:any;
  p:number=1;
  secteur:any;
  constructor(private dataTransferService:DataTransferService ,private dialogRef :MatDialog,private emploiService: EmploiService) { }
  ngOnInit(): void {
    this.emploiService.getEmploi().subscribe(()=> this.emploiService.getEmploi().pipe(first()).subscribe((data)=>this.tousEmplois=data))
   
    console.log("list emplois" +this.tousEmplois)
  }
  onPostuler(e: Emploi){
    this.dataTransferService.data=e;
  }
  openDialog(e: Emploi){
   
    this.dataTransferService.data=e;
    this.dialogRef.open(EmploiDetailPopupComponent)
  }
  // getAccount(id:any){
  //   this.emploiService.getAccountById(id).pipe(first()).subscribe((res) => {
  //     this.compte = res
  //   });
  // }
  Search(){
  if(this.secteur==""){
    this.ngOnInit();
  }else{
    this.tousEmplois=this.tousEmplois.filter(res=>{
      return res.secteur.toLocaleLowerCase().match(this.secteur.toLocaleLowerCase());
    });

    } 
  }
  convert(element:any){
    return JSON.parse(element);
  }
 
}
