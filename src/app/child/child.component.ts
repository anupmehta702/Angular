import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   @Input() oneWayBindedVar : String;

   @Output() change : EventEmitter<String> = new EventEmitter<String>();
   @Output() changeCounter :EventEmitter<Number> = new EventEmitter<Number>();

   serverName : String='Default ';
   counter:number=1;

  constructor() { }

  ngOnInit() {
  }

  OnUpdate(event:Event){
  	this.serverName=(<HTMLInputElement>event.target).value;
  	this.change.emit(this.serverName);

  }

  OnSimpleUpdate(){
  	console.log('On simple update-->',this.serverName);
  	this.change.emit(this.serverName);
  	this.changeCounter.emit(this.counter++);
    this.oneWayBindedVar = 'changed parent value';
  }


}
