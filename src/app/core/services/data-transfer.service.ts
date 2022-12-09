import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }
 
  public myData : String="XDDD";
  public data : any;
}
