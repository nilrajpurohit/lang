import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a7-two-way-binding',
  templateUrl: './a7-two-way-binding.component.html',
  styleUrls: ['./a7-two-way-binding.component.scss']
})
export class A7TwoWayBindingComponent implements OnInit {
  name:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
