import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a5-event-binding',
  templateUrl: './a5-event-binding.component.html',
  styleUrls: ['./a5-event-binding.component.scss']
})
export class A5EventBindingComponent implements OnInit {

  constructor() { }
  data:string = "Hello World !";

  onClick(){
    alert(this.data);
  }

  onClick2(){
    this.data = "Hell World !";
    alert(this.data);
  }

  onClick3(e:any){
    console.log(e);
    alert(e.type);
  }

  ngOnInit(): void {
  }

}
