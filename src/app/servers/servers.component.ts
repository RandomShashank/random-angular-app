import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No servers created';
  serverName = 'testServer';
  serverCreated = false;
  text= 'Secret password is tuna';
  showSecret = false;
  log = [0];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated=true;
    this.serverCreationStatus = 'Server was created, Name is ' + this.serverName;    
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onToggle() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
