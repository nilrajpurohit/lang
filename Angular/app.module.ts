import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

//So as we included interpolation component in module we required to invoke the selector of interpolation component
// under app.component.html so that will be visible in application 
import { A1InterpolationComponent } from './a1-interpolation/a1-interpolation.component';
import { A2PropertyBindingComponent } from './a2-property-binding/a2-property-binding.component';
import { A3ClassBindingComponent } from './a3-class-binding/a3-class-binding.component';
import { A4StyleBindingComponent } from './a4-style-binding/a4-style-binding.component';
import { A5EventBindingComponent } from './a5-event-binding/a5-event-binding.component';
import { A6TemplateReferenceVariableComponent } from './a6-template-reference-variable/a6-template-reference-variable.component';
import { A7TwoWayBindingComponent } from './a7-two-way-binding/a7-two-way-binding.component';
import { A8NgIfDirectiveComponent } from './a8-ng-if-directive/a8-ng-if-directive.component';
import { A9NgSwitchDirectiveComponent } from './a9-ng-switch-directive/a9-ng-switch-directive.component';
import { A10NgforDirectiveComponent } from './a10-ngfor-directive/a10-ngfor-directive.component';
import { ParentCompoComponent } from './a11-component-interaction/parent-compo/parent-compo.component';
import { ChildCompoComponent } from './a11-component-interaction/child-compo/child-compo.component';
import { A12BultinPipesComponent } from './a12-bultin-pipes/a12-bultin-pipes.component';
import { EmployeeListComponent } from './a13-service/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './a13-service/employee-details/employee-details.component';
import { EmployeeService } from './employee-service.service';
import { EmployeeDataComponent } from './a14-http-observable/employee-data/employee-data.component';
import { A15HttpErrorHandlerComponent } from './a15-http-error-handler/a15-http-error-handler.component';
import { A16RoutingComponent } from './a16-routing/a16-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    //declaration is use for allow permission to use it on dom.
    A1InterpolationComponent,
    A2PropertyBindingComponent,
    A3ClassBindingComponent,
    A4StyleBindingComponent,
    A5EventBindingComponent,
    A6TemplateReferenceVariableComponent,
    A7TwoWayBindingComponent,
    A8NgIfDirectiveComponent,
    A9NgSwitchDirectiveComponent,
    A10NgforDirectiveComponent,
    ParentCompoComponent,
    ChildCompoComponent,
    A12BultinPipesComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeDataComponent,
    A15HttpErrorHandlerComponent,
    A16RoutingComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
