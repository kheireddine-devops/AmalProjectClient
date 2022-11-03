import { HelpService } from './../../shared/service/help.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Help } from 'src/app/shared/model/Help';

@Component({
  selector: 'app-help-show',
  templateUrl: './help-show.component.html',
  styleUrls: ['./help-show.component.css']
})
export class HelpShowComponent implements OnInit {
  listHelps :Help[]=[];

  constructor(private helps:HelpService) { }

  ngOnInit(): void {
    this.helps.getHelps().subscribe((data:Help[])=>this.listHelps=data);
  }

}
