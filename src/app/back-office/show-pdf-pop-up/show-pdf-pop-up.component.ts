import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/core/services/data-transfer.service';

@Component({
  selector: 'app-show-pdf-pop-up',
  templateUrl: './show-pdf-pop-up.component.html',
  styleUrls: ['./show-pdf-pop-up.component.css']
})
export class ShowPDFPopUpComponent implements OnInit {
   public urlcv: any;
  constructor(public dataTransferService :DataTransferService) { }

  ngOnInit(): void {
   this.urlcv=this.dataTransferService.data.url_cv ;
   console.log(this.urlcv)
  }
}
