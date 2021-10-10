import { AbstractControl,ValidatorFn } from "@angular/forms";

export function ForbiddenNameValidator(forbiddeName:RegExp):ValidatorFn{
    return (control:AbstractControl):{[key:string]:any} | null =>{
        const forbidden = forbiddeName.test(control.value);
        return forbidden ? {'ForbiddenName' :{value:control.value}} : null;
    }
}

export function PasswordValidator(control:AbstractControl):{[key:string]:boolean} | null{
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value != confirmPassword.value ? {'misMatch' : true} : null;
}