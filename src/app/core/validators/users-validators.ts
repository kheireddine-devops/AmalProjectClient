import {
  AbstractControl,
  AbstractFormGroupDirective,
  AsyncValidatorFn,
  FormGroup,
  ValidationErrors,
  ValidatorFn
} from "@angular/forms";
import {delay, map, Observable} from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";
import {UsersService} from "../services/users.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UsersValidators {

  constructor(public _usersService: UsersService) {
  }

   uniqueEmail(control: AbstractControl): ValidationErrors | null {
    if(control.value.match(/[0-9]/g)) {
      console.log("matched")
      return {
        uniqueEmail: true
      }
    }
    console.log("not matched")
    return null;
  }

   IsMatched(pattern: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(control.value.match(pattern)) {
        console.log("matched")
        return {
          IsMatched: true
        }
      }
      console.log("not matched")
      return null;
    }
  }

   passwordIsMatched(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log(control)
      console.log(control.get(source)?.value !== control.get(target)?.value)
      if (control.get(source)?.value !== control.get(target)?.value) {
        (control as FormGroup).controls[target].setErrors({
          passwordIsMatched: true
        });
        return {
          passwordIsMatched: true
        }
      }
      return null;
    }
  }

  DateInTheFuture(): ValidatorFn  {
    return (control: AbstractControl): ValidationErrors | null => {
      if(control.value > Date.now()) {
        return {
          DateInTheFuture: true
        }
      }
      return null;
    }
  }

  DateInThePast(): ValidatorFn  {
    return (control: AbstractControl): ValidationErrors | null => {
      if(control.value < Date.now()) {
        return {
          DateInThePast: true
        }
      }
      return null;
    }
  }

   confirmPasswordValidator() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log(control);
      (control as FormGroup).get("password")?.setErrors({
        // Error In Scope passwordFormControl
      });
      (control as FormGroup).setErrors({
        // Error In Scope UserFormGroup
      });
      return null;
    }
  }

    IsUniqueUsername() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this._usersService.existsUserByUsername(control.value)
        .pipe(map(value => {
          return value ? { IsUniqueUsername: true } : null;
        }));

      // return ajax.getJSON(`http://localhost:3000/accounts?username=${control.value}`)
      //   // .pipe( delay(2000) )
      //   .pipe( map((value: any) => {
      //     // console.log(value[0].email)
      //     // console.log(control.value)
      //     // console.log(value[0].email === control.value)
      //     return (value[0].username == control.value) ? { IsUniqueUsername: true } : null;
      //   }));
    }
  }

  IsUniqueEmail() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this._usersService.existsUserByEmail(control.value)
        .pipe(map(value => {
          return value ? {IsUniqueEmail: true} : null;
        }));
      }
    }

  IsUniquePhone() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this._usersService.existsUserByPhone(control.value)
        .pipe(map(value => {
          return value ? {IsUniquePhone: true} : null;
        }));
    }
  }

  IsUniqueMatriculeFiscale() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this._usersService.existsOrganizationByMatriculeFiscale(control.value)
        .pipe(map(value => {
          return value ? {IsUniqueMatriculeFiscale: true} : null;
        }));
    }
  }

  IsUniqueDoctorMatricule() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this._usersService.existsDoctorByMatricule(control.value)
        .pipe(map(value => {
          return value ? {IsUniqueDoctorMatricule: true} : null;
        }));
    }
  }

  // static passwordIsMatchedByFormGroup(): ValidatorFn {
  //   return (group: AbstractControl<any, any>): ValidationErrors | null => {
  //     console.log("*************")
  //     console.log(group)
  //     console.log((group as FormGroup).get("password")?.value);
  //     console.log((group as FormGroup).get("confirmPassword")?.value);
  //     return null;
  //   }
  // }


  IsUniqueCIN() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this._usersService.existsDoctorByCIN(control.value)
        .pipe(map(value => {
          return value ? {IsUniqueCIN: true} : null;
        }));
    }
  }

  IsUniqueCarteHandicapNumber() : AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this._usersService.existsBeneficierByCarteHandicapNumber(control.value)
        .pipe(map(value => {
          return value ? {IsUniqueCarteHandicapNumber: true} : null;
        }));
    }
  }
}
