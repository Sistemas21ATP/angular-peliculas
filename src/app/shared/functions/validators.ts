import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function firstUppercase(): ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
        const value  = <String> control.value;
        if(!value) return null;
        if(value.length === 0) return null;
        
        const first = value[0];
        if(first!== first.toUpperCase()){
            return {
                firstUppercase:{
                    message: "La primer letra debe ser mayuscula"
                }
            };
        }
        return null;
    }
}


export function dateIsInTheFuture():ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
        const user_date = new Date(control.value);
        const today = new Date();
        if(user_date > today){
            return{
                dateIsInTheFuture:{
                    message: "La fecha está en el futuro"
                }
            };
        } 
        return null;
    }
}