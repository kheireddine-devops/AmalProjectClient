import { Component, OnInit } from '@angular/core';
import { report } from '../../core/entities/report';
import { ReportService } from '../../core/services/report.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {

  listRapport : report[]=[];

  title :string ="Liste mes rapport";

  constructor(private reportService:ReportService) { }

  ngOnInit(): void {
    this.reportService.getReport().subscribe((data)=>this.listRapport=data);
  }

}
