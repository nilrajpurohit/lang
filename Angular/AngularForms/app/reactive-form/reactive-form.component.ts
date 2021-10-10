import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule,FormControl, FormBuilder, Validators,FormArray } from '@angular/forms';
import { ForbiddenNameValidator,PasswordValidator } from '../shared/username.validator';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb:FormBuilder) {}
  
  ngOnInit(): void {
    //This is with FormBuilder implicitly uses (FormGroup and FormControl).
    this.registrationForm = this.fb.group({
      username : ['',[Validators.required,Validators.minLength(4),ForbiddenNameValidator(/password/)]],
      password : ['',[Validators.required,Validators.minLength(7)]],
      confirmPassword : ['',[Validators.required]],
      email:[''],
      subscribe:[''],
      alternateEmails:this.fb.array([]),
    },{validator:PasswordValidator});

    this.registrationForm.get('subscribe')?.valueChanges.subscribe((value)=>{
      if(value){
        this.registrationForm.get('email')?.setValidators(Validators.required);
      }else{
        this.registrationForm.get('email')?.clearValidators();
      }
      this.registrationForm.get('email')?.updateValueAndValidity();
    })
  }
  
  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addEmailField(){
    this.alternateEmails.push(this.fb.control(''));
  }

  removeEmailField(){
    this.alternateEmails.clear();
  }
  //This is FormGroup and FormControl
  // registrationForm = new FormGroup({
  //   username : new FormControl('Nil'),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  // });

  loadData(){
    this.registrationForm.patchValue({
      username : 'Nil Rajpurohit',
      password : 123
    })
  }
}
