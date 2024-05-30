import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  clientCount: number = 0;
  cakeCount: number = 0;
  treatCount: number = 0;
  clients : number = 100;
  cakes: number = 200;
  treats: number = 300;
    
  clientCounter(){
    for(let i = 1; i < this.clients; i++){
      this.clientCount = i;
    }
  }
}
