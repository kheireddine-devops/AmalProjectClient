import { Component, OnInit } from '@angular/core';
import { Candidature } from 'src/app/core/entities/Candidature';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  titrepage:any="Postuler "
  currentDate:any =new Date(); //curent date
  candidature! : Candidature;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){

  }
}
