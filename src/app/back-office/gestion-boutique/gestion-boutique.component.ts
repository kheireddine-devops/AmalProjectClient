import { boutique } from '../../core/entities/boutique';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gestion-boutique',
  templateUrl: './gestion-boutique.component.html',
  styleUrls: ['./gestion-boutique.component.css']
})
export class GestionBoutiqueComponent implements OnInit {

  constructor() { }

  saveData(registerForm : NgForm){
      console.log(registerForm.form);

    }


  ngOnInit(): void {
  }

  boutique: boutique = new boutique();
  onsubmit(){
    console.log(boutique);
  }
}
