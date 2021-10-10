import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-compo',
  templateUrl: './child-compo.component.html',
  styleUrls: ['./child-compo.component.scss']
})
export class ChildCompoComponent implements OnInit {

  constructor() { }
  // @Input is an decorator which use to get data as a input from parent to child component.
  @Input('parentData') public name:any;

  //@Output is an decorator which is use to pass data from child to parent using eventemitter.
  //eventemitter is an eventListener which is listen to emit() method. which is called under fireEvent().
  @Output() public childEvent = new  EventEmitter();

  ngOnInit(): void {
  }

  childData:string = 'This is an Child Data';
  //this function is called by a button click event.
  fireEvent(){
    //after this we have to bind childEvent into template.
    this.childEvent.emit(this.childData);
  }

}
