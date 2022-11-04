import { EmploiService } from './../../services/emploi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplois',
  templateUrl: './emplois.component.html',
  styleUrls: ['./emplois.component.css']
})
export class EmploisComponent implements OnInit {

  constructor(private emploiService :EmploiService) { }

  ngOnInit(): void {
  }

}
