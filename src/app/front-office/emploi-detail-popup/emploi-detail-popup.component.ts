import { DataTransferService } from './../../core/services/data-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emploi-detail-popup',
  templateUrl: './emploi-detail-popup.component.html',
  styleUrls: ['./emploi-detail-popup.component.css']
})
export class EmploiDetailPopupComponent implements OnInit {

  constructor(public dataTransferService :DataTransferService) { }

  ngOnInit(): void {
    
  }

}
