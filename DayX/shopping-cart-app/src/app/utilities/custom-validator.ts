import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static ageRange(min=20, max=60): ValidatorFn{
        return (control:AbstractControl):ValidationErrors | null => {
            // console.log('the control value is',control.value);
            if(control.value !== '' && (isNaN(control.value) ||
            control.value < min || control.value > max)){
                return {'ageRange':true};
            }else{
                return null;
            }
        }
    }
}