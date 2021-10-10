import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-department-data',
  templateUrl: './department-data.component.html',
  styleUrls: ['./department-data.component.scss']
})
export class DepartmentDataComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }
  departmentId:number=0;
  ngOnInit(): void {
    //This will work on at component intialized not on active state.
    //Under this id is a parameter by url.
    // let id =  this.route.snapshot.paramMap.get('id');
    // this.departmentId = id;

    //This will work on url listen for Obervable on active as well as intialized.
    //Under this id is a parameter by url. subscribe will listen to url on change and get a parameter as a params.
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id:any = params.get('id');
      this.departmentId = parseInt(id);
    })
  }

  // This Previous and Next method called on anchor tag click (check view template).
  previous(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments-dep',previousId]);
  }

  next(){
    let next = this.departmentId + 1;
    this.router.navigate(['/departments-dep',next]);
  }

  goBack(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //This will return back from /department/id    to    /departments;id=4 (;id=4 is an optional parameter no need to initialized on routeComponent).
    // But this not felaxible if url changes
    // this.router.navigate(['/departments',{id:selectedId}])

    //This is flexiable if url changes in future.
    this.router.navigate(['../',{id:selectedId}], {relativeTo:this.route})

  }
}
