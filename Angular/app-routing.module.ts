import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './a16-routing/departments/departments.component';
import { EmployeesComponent } from './a16-routing/employees/employees.component';
import { WildCardRouteComponent } from './a16-routing/wild-card-route/wild-card-route.component';
import { DepartmentDataComponent } from './a16-routing/department-data/department-data.component';

const routes: Routes = [
  // {path:'',component:EmployeesComponent}, OR 
  {path:'',redirectTo:'/departments-dep',pathMatch:'full'}, // This is an redirect url example.
  {path:'employees',component:EmployeesComponent},
  {path:'departments-dep',component:DepartmentsComponent},
  // in this :id is a placeholer i.e parameter route
  {path:'departments-dep/:id',component:DepartmentDataComponent},
  //This wild card routing act as error page not found (make sure this route should be in end of the list, otherwise it will match to all).
  {path:'**',component:WildCardRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentsComponent , EmployeesComponent ,WildCardRouteComponent,DepartmentDataComponent];
