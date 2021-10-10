import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a2-property-binding',
  templateUrl: './a2-property-binding.component.html',
  styleUrls: ['./a2-property-binding.component.scss']
})
export class A2PropertyBindingComponent implements OnInit {

  name:string = 'nil';
  constructor() { }

  ngOnInit(): void {
  }

}
