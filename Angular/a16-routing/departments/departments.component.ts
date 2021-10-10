import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  public selectedId:any;
  departments:any[]=[
    {id:'1',name:"Angular"},
    {id:'2',name:"React"},
    {id:'3',name:"Vue"},
    {id:'4',name:"Ionic"}
  ];
  constructor(private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap:ParamMap)=>{
      let id:any = paramMap.get('id');
      this.selectedId = parseInt(id);
    })
  }

  onSelect(dep:any){
    // nagivatew will take array one is route and second is parameter, But this not felaxible if url changes
    // this.route.navigate(['/department',dep.id]) 
   //This is flexiable if url changes in future.
   this.route.navigate([dep.id], {relativeTo:this.router})
  }

  isSelected(dep:any){
    return dep.id == this.selectedId;
  }
}
