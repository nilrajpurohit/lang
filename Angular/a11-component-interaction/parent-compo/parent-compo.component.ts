import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-compo',
  templateUrl: './parent-compo.component.html',
  styleUrls: ['./parent-compo.component.scss']
})
export class ParentCompoComponent implements OnInit {

  constructor() { }
  public name:string = "Nil Rajpurohit";
  public childData:any = "";
  ngOnInit(): void {
  }

}
