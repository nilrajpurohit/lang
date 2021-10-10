import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a4-style-binding',
  templateUrl: './a4-style-binding.component.html',
  styleUrls: ['./a4-style-binding.component.scss']
})
export class A4StyleBindingComponent implements OnInit {

  constructor() { }

  successColor:string = 'color:green';
  successColorApply:string = 'green';
  isSuccess:boolean=false;

  // make sure that style property not in '-' symbol it should be in camelCase like (font-style,fontStyle)
  multipleStyle:object={
    color:'red',
    fontStyle:'italic'
  }

  ngOnInit(): void {
  }

}
