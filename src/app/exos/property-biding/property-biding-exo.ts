import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Friend {
  img: string;
  name: string;
  statut: boolean;
  age: number;
  bio: string;
  reputation: string;
}

@Component({
  selector: 'app-property-biding-exo',
  imports: [FormsModule, NgClass, NgStyle, NgFor],
  templateUrl: './property-biding-exo.html',
  styleUrl: './property-biding-exo.css'
})
export class PropertyBidingExo {
  defaultImg: string = "https://picsum.photos/200/300"
  img: string = "https://logowik.com/content/uploads/images/angular-a-letter-new-20243216.logowik.com.webp"
  name: string = "John Doe"
  statut: boolean = false
  age: number = 25;
  bio: string = "Je suis une bio"
  reputation: string = ""
  isRingardColor = "green";
listFriend: Friend[] = [
  {
    img: "",
    name: "",
    statut: false,
    age: Math.floor(Math.random() * 100),
    bio: "",
    reputation: "",
  }
];

  radomizeAge(): number {
    return this.age = Math.floor(Math.random() * 100);
  }
  regexIMG(img: string): boolean {
    const regex = /^https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif)$/i;
    return regex.test(img);
  }
  getIMG() {
    return this.regexIMG(this.img) ? this.img : this.defaultImg;
  }
  changeStatut(): void {
    this.statut = !this.statut;
  }
    addFriend(img:string, name:string, statut:boolean, age:number, bio:string, reputation:string ){
      this.listFriend.push({img, name, statut, age, bio, reputation })
      console.log(this.listFriend);
  }
  @Input() imgProps:string = "";
}



// const listFriend = [{
//   friend: {
//     img: "",
//     name: "Emilie",
//     statut: false,
//     age: 29,
//     bio: "Aime les pieds",
//     reputation: "",
//   }
// },
// {
//   friend: {
//     img: "",
//     name: "Gomarz",
//     statut: false,
//     age: 27,
//     bio: "Aime les chips aux pipi",
//     reputation: "",
//   }
// },
// {
//   friend: {
//     img: "",
//     name: "Thomas",
//     statut: true,
//     age: 25,
//     bio: "Se casse les os toutes les 2 sec",
//     reputation: "",
//   }
// }]
