import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input("isOpenSideBar") isOpenSideBar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
