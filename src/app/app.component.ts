import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText: string;
  title = 'fidelity';

  @Output() triggerEvent = new EventEmitter();

  constructor() {

  }

  triggerEventFun(){
    this.triggerEvent.emit(this.searchText);
  }

}
