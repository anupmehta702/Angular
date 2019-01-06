import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
	serverName : String;
	counter:number;
  isDisabled:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  updatedValueFromChild(event){
  console.log('value in parent-->',event);
  
  this.serverName = event;
  }

  updateCounteValueFromChild(event){
  	this.counter=event;
  }

}
