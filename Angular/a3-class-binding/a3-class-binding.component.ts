import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a3-class-binding',
  templateUrl: './a3-class-binding.component.html',
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class A3ClassBindingComponent implements OnInit {

  successClass:string='text-success';
  isSuccess:boolean=true;
  isSpecial:boolean=true;

  applyMultipleClass = {
    'text-success' : this.isSuccess,
    'text-danger' : !this.isSuccess,
    'text-special' : this.isSpecial,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
