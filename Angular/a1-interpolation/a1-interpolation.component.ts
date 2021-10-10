//Must needed to include this component under AppModule.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a1-interpolation',
  templateUrl: './a1-interpolation.component.html',
  styleUrls: ['./a1-interpolation.component.scss']
})
export class A1InterpolationComponent implements OnInit {

  constructor() { } // if you not create construct it will be there as an empty.(at compile time)

  public dynamic:string = "dynamic data by Interpolation or also know as DataBinding";
  public limitation:string = "But cannot use or access global variable of javascript directly in DOM like(document,window,title and so on)";
  public siteUrl:string = window.location.href;
  
  ngOnInit(): void {
  }

}
