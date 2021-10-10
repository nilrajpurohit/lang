import { Component } from '@angular/core';
import { User } from '../classes/user';
import { EnrollUserService } from '../enroll-user.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  constructor(public enroll:EnrollUserService){}
  userModel = new User('','Nilrajp@gmail.com',7414959859,'Angular','morning',true);
  topicHasError=true;
  errorMsg:string='';
  topics = [
    {id:1,name:'Angular'},
    {id:2,name:'Node'},
    {id:3,name:'React'},
    {id:4,name:'Django'},
  ];

  validateTopic(value:string){
    this.topicHasError = value ===''?true:false;
  }

  onSubmit(){
    this.enroll.enroll(this.userModel).subscribe(
      data => console.log(data),
      error => this.errorMsg = error.statusText
    );
  }
}
