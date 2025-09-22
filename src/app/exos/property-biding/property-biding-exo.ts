import { Component } from '@angular/core';

@Component({
  selector: 'app-property-biding-exo',
  imports: [],
  templateUrl: './property-biding-exo.html',
  styleUrl: './property-biding-exo.css'
})
export class PropertyBidingExo {
  img:string="https://picsum.photos/200/300"
  name:string = "John Doe"
  statut:string ="Offline"
  age:number = Math.floor(Math.random()*100);
  bio:string = "Je suis une bio"
  reputation:string = ""
}
