import { Route, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProduitService } from 'src/app/core/services/produit.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { produit } from 'src/app/core/entities/produit';


@Component({
  selector: 'app-gestion-boutique',
  templateUrl: './gestion-boutique.component.html',
  styleUrls: ['./gestion-boutique.component.css']
})
export class GestionBoutiqueComponent implements OnInit {
  idp : number = -1;
  Prod :produit = new produit();
  operation : String = 'Ajouter ';
  photo: File | undefined;
  // ADD_PRODUCT | EDIT_PRODUCT
  mode: String = "ADD_PRODUCT";


  constructor(private produitService: ProduitService,
    private router:Router,
    private aRouter : ActivatedRoute) {
    
     }

  saveData(registerForm : NgForm){
     console.log(registerForm.form);
   }
  ngOnInit(): void {

      this.aRouter.paramMap.subscribe((params: ParamMap) => {
        if(params.has("id")) {
          this.idp = Number.parseInt(params.get("id")+"");
          this.mode = 'EDIT_PRODUCT';
   
          this.produitService.getOneProduit(this.idp).subscribe(value => {
           this.Prod = value;
          }, error => {
   
          });
        } else {
          this.mode = 'ADD_PRODUCT';
        }
      

      })
    }

    onAddProduct(){

      console.log("ON ADD")
 
    if(this.photo !== undefined) {
      console.log(this.Prod);
      this.produitService.saveProduct(this.Prod,this.photo).subscribe((data)=>
      this.router.navigateByUrl("/BackOffice/store-produit"));
    }
    

 }

 onEditProduct(){

  console.log("ON EDIT")
 
  console.log(this.Prod);
  this.produitService.updateproduct(this.Prod).subscribe((data)=>this.router.navigateByUrl('/BackOffice/store-produit'));

}


 selectFile(event: any): void {
  this.photo = event.target.files.item(0);
 }
}

