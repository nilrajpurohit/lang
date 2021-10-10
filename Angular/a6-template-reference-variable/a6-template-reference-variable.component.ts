import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a6-template-reference-variable',
  templateUrl: './a6-template-reference-variable.component.html',
  styleUrls: ['./a6-template-reference-variable.component.scss']
})
export class A6TemplateReferenceVariableComponent implements OnInit {

  constructor() { }

  logMessage(value:string){
    console.log(value);
  }

  ngOnInit(): void {
  }

}
