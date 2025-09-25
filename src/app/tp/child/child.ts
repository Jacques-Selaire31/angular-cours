import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input() name: string = '';
  @Output() changeStatus = new EventEmitter<string>();
  newStatus = "Online";
  status = ''

  outputToParent(status:string){
    this.changeStatus.emit(status)
  }

}
