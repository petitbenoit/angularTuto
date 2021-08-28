import { AbstractControl, FormControl } from '@angular/forms';

export function zipcodeValidator(control : FormControl) {

    if (control.value == 12345) return null;

    return {
        // name_of_error : information_related_to_error
        zipcode : {
            allowedCode: 12345,
            enteredCode: control.value,
        },
    };
}

export function comparePasswordValidator(compareField : string) {
    // function should return another function there ; here the same we did previously
    return (control : AbstractControl) => {
        // control.parent, control.root -> name of the object; userForm
        if (control.value === control.parent?.get(compareField)?.value) return null;

        return {
            compare: true,
        }
    }
}