import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a12-bultin-pipes',
  templateUrl: './a12-bultin-pipes.component.html',
  styleUrls: ['./a12-bultin-pipes.component.scss']
})
export class A12BultinPipesComponent implements OnInit {
  public name:string="Nil";
  public title:string="This is an angular notes";
  public data:object={
    fname:'Nil',
    lname:'Rajpurohit',
    age:'22'
  }

  public number:number = 5.679;
  public date:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
