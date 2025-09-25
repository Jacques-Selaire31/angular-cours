import { Component } from '@angular/core';
import { Child } from '../child/child';
import { FormsModule } from '@angular/forms';

interface User {
  id:number,
  name:string;
  status:string
}

@Component({
  selector: 'app-parent',
  imports: [Child,FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  arrayUser =[];
  userName:string =''; 
  user:User = {id: Math.random(),name: "", status:"Offline"}
  newStatus = "Online";
  changeStatus(newStatus:string){
    this.user.status = newStatus;
  }
  addUser(){
    this.arrayUser.push(this.user)
  }
}
