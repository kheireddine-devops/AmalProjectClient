import { Component, OnInit } from '@angular/core';
import { demandeaide } from 'src/app/core/entities/Help';
import { ActivatedRoute, Router } from '@angular/router';
import { HelpService } from '../../core/services/help.service';

@Component({
  selector: 'app-updateaidebenif',
  templateUrl: './updateaidebenif.component.html',
  styleUrls: ['./updateaidebenif.component.css']
})
export class UpdateaidebenifComponent implements OnInit {

  help :demandeaide=new demandeaide();
  id:any;

  constructor(private helpservice:HelpService ,private router: Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    this.helpservice.SearchHelpById(this.id).subscribe(res=>{
      this.help=res;
    console.log(this.help)})
  }
  updateaide(f:any){
    let data=f.value;
    this.helpservice.updateHelpBenif(this.id,data).subscribe();
    this.router.navigate(['/BackOffice/gestionaidesbenif'])
  }

}
