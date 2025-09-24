import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-display',
  imports: [NgIf, NgFor, NgClass, NgStyle],
  templateUrl: './button-display.html',
  styleUrl: './button-display.css'
})
export class ButtonDisplay {
    isClicked:boolean = false;
    countArray:Array<number> = [];
    count:number = 0;
    displayCount = 0;
    isClickedToggle(){
      this.isClicked = !this.isClicked;
      this.count++;
      this.countArray.push(this.count);
      console.log(this.countArray)
    }
}
