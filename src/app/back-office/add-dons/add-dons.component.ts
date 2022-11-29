import { Dons } from '../../core/entities/dons';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonsService } from '../../core/services/dons.service';


@Component({
  selector: 'app-add-dons',
  templateUrl: './add-dons.component.html',
  styleUrls: ['./add-dons.component.css']
})
export class AddDonsComponent implements OnInit {
  dons: Dons = new Dons();
  title! : string;



  constructor(private donsService: DonsService, private route: Router, private currentRoute: ActivatedRoute ) { }


  ngOnInit(): void {
    let id=this.currentRoute.snapshot.params['id_dons'];
    console.log(id);
    if (id==null){
      this.dons=new Dons;
      this.title='Ajouter noveaux don'}
      else {
        this.title='Modifier le dons avec l"id '+id;
        this.donsService.getDonsById(id).subscribe((data)=>this.dons=data)
      }

    }
   save(){
    if(this.dons.id_dons==null){
      this.donsService.addDons(this.dons).subscribe(
        ()=>this.route.navigate(['dons'])
      )
    }else{
      this.donsService.updateDons(this.dons).subscribe(
        ()=>this.route.navigate(['dons'])
      )
    }
   }


  }


