
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warning-alert-root',
  templateUrl: './warning-alert.component.html',
  //styleUrls: ['./warning-alert.component.css']
  styles:[`
  p{
    color: red;
  }
  `]
})
export class WarningAlertComponent implements OnInit{
    constructor(){}
    ngOnInit(){}
}