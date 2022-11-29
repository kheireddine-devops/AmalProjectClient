import { ReportService } from '../../core/services/report.service';
import { Component, OnInit } from '@angular/core';
import { report } from '../../core/entities/report';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajouter-rapport',
  templateUrl: './ajouter-rapport.component.html',
  styleUrls: ['./ajouter-rapport.component.css']
})
export class AjouterRapportComponent implements OnInit {
  rep: report = new report;
  title! : string;

  constructor(private reportService:ReportService, private route: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.currentRoute.snapshot.params['id_rapport'];
    console.log(id);
    if (id=null){
      this.rep= new report;
      this.title='Ajouter un rapport'}
      else {
        this.title='Modifier le dons avec l"id'+id;
        this.reportService.getReportById(id).subscribe((data)=>this.rep=data)
      }
    }

    ajouter(){
      if(this.rep.id_rapport==null){
        this.reportService.addReport(this.rep).subscribe(
          ()=>this.route.navigate(['rep'])
        )
      }else{
        this.reportService.updateDons(this.rep).subscribe(
          ()=>this.route.navigate(['dons'])
        )
      }
      }
    }






