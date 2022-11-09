import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReserverServiceService {

  constructor() { }
  getNumberOf(list:any[], critiria:string, value:any){
    console.log(list);
    console.log(critiria)
    console.log(value)

    return list.filter((t)=> t[critiria] === value).length;
}
}
