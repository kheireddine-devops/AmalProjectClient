import { Component, OnInit } from '@angular/core';
import { report } from '../../core/report';
import { ReportService } from '../../core/services/report.service';

@Component({
  selector: 'app-consulter-rapport',
  templateUrl: './consulter-rapport.component.html',
  styleUrls: ['./consulter-rapport.component.css']
})
export class ConsulterRapportComponent implements OnInit {

  listRapport : report[]=[];

  constructor(private reportService:ReportService) { }

  ngOnInit(): void {
    this.reportService.getReport().subscribe((data)=>this.listRapport=data);
  }

}
