import { Component,Input } from '@angular/core';
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css']
})
export class ServerComponent {
	@Input() displayServerName: string ;
	serverId: number =10; 
	serverStatus:String ='offline';
	constructor(){
	this.serverStatus=Math.random() >0.5 ? 'online':'offline';
	}
	getServerStatus(){
		return this.serverStatus;
	}
	getServerColor(){
		return this.serverStatus === 'online'? 'green' : 'red';
	}
	getServerName(){
		let name=this.displayServerName;
		return name;
	}

	}