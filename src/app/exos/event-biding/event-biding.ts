import { Component } from '@angular/core';

@Component({
  selector: 'app-event-biding',
  imports: [],
  templateUrl: './event-biding.html',
  styleUrl: './event-biding.css'
})
export class EventBiding {
  constructor() {
    setTimeout(()=>{this.isDisabled = !this.isDisabled}, 5000);
  }
  nameFriend = "";
  hasFriend: boolean = false;
  isDisabled: boolean = false;
  updatedField(event: KeyboardEvent): void {
    this.nameFriend += event.key;
  }
  addFriend(event: PointerEvent): void {
    this.hasFriend = true;
  }
}
