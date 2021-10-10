import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a10-ngfor-directive',
  templateUrl: './a10-ngfor-directive.component.html',
  styleUrls: ['./a10-ngfor-directive.component.scss']
})
export class A10NgforDirectiveComponent implements OnInit {

  constructor() { }

  // creating and array to ittrate on view template..
  colors:string[] = ['red','green','blue','yellow'];

  ngOnInit(): void {
  }

}
