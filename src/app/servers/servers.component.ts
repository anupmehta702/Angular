import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '.app-servers', // for class='app-servers'
  //selector: '[app-servers]', //for property 
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {
allowNewServer:boolean =false;
serverName:String='defaultName';
serverCreated:boolean= false;
servers:String[] = ['test','test2'];

serverCreationStatus:String = 'No server was created !!';
  constructor() {
  	setTimeout(()=>{
  		this.allowNewServer = true;
  		},2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
  	this.serverCreated=true;
  	this.servers.push(this.serverName);
  	this.serverCreationStatus='Server was created !';
  }

  onUpdateServerName(event:Event){
  //event:any is also allowed
  	this.serverName=(<HTMLInputElement>event.target).value;
  }

}
