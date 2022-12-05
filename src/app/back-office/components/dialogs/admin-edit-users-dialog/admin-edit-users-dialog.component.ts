import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UsersService} from "../../../../core/services/users.service";
import {
  DOCTOR_ASSURANCES,
  DOCTOR_SPECIALTIES,
  FORME_JURIDIQUE,
  FormPart,
  Patterns
} from "../../../../front-office/guest-inscription/guest-inscription.component";
import {Beneficier, Benevole, Doctor, GenderEnum, Organization} from "../../../../core/entities/users";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersValidators} from "../../../../core/validators/users-validators";
import {DialogMode} from "../../admin-user-management/admin-user-management.component";

@Component({
  selector: 'app-admin-edit-users-dialog',
  templateUrl: './admin-edit-users-dialog.component.html',
  styleUrls: ['./admin-edit-users-dialog.component.css']
})
export class AdminEditUsersDialogComponent implements OnInit {

  // Account
  _usernameFormControl: FormControl = new FormControl("",{
    validators: [Validators.required, Validators.pattern(Patterns.USERNAME)],
    asyncValidators: [this._usersValidators.IsUniqueUsername()],
    updateOn: "blur"
  });
  _passwordFormControl: FormControl = new FormControl("",[Validators.required, Validators.pattern(Patterns.PASSWORD_JS_LEVEL_4)],[]);
  _confirmPassword: FormControl = new FormControl("",[Validators.required],[]);
  // User
  _emailFormControl: FormControl = new FormControl("",{
    validators: [Validators.required, Validators.email /*, Validators.pattern(Patterns.EMAIL)*/],
    asyncValidators: [this._usersValidators.IsUniqueEmail()],
    updateOn: "blur"
  });
  _phoneFormControl: FormControl = new FormControl("",{
    validators: [Validators.required,Validators.pattern(Patterns.TUNISIA_PHONE_PHONE)],
    asyncValidators: [
       this._usersValidators.IsUniquePhone()
    ],
    updateOn: "blur"
  });
  _addressFormControl: FormControl = new FormControl("",[Validators.required],[]);
  _photoFormControl: FormControl = new FormControl("",[Validators.required],[]);
  _firstnameFormControl: FormControl = new FormControl("",[Validators.required , Validators.pattern(Patterns.FIRSTNAME)],[]);
  _lastnameFormControl: FormControl = new FormControl("",[Validators.required, Validators.pattern(Patterns.LASTNAME)],[]);
  _dateOfBirthFormControl: FormControl = new FormControl("",[Validators.required, this._usersValidators.DateInTheFuture()],[]);
  _genderFormControl: FormControl = new FormControl("",[Validators.required],[]);
  // Doctor
  _matriculeFormControl: FormControl = new FormControl("",{
    validators: [Validators.required, Validators.pattern(Patterns.TUNISIA_DOCTOR_MATRICULE)],
    asyncValidators: [this._usersValidators.IsUniqueDoctorMatricule()],
    updateOn: "change"
  });
  _specialtyFormControl: FormControl = new FormControl("",{
    validators: [Validators.required]
  });
  _cinFormControl: FormControl = new FormControl("",{
    validators: [Validators.required , Validators.pattern(Patterns.TUNISIA_CIN)],
    asyncValidators: [this._usersValidators.IsUniqueCIN()]
  });
  _assuranceFormControl: FormControl = new FormControl([],{validators: [Validators.required]});
  // Beneficier
  _carteHandicapNumberFormControl: FormControl = new FormControl("",{
    validators: [Validators.required, Validators.pattern(Patterns.TUNISIA_CARTE_HANDICAP_NUMBER)],
    asyncValidators: [this._usersValidators.IsUniqueCarteHandicapNumber()]
  });
  _dateExpirationFormControl: FormControl = new FormControl("",{validators: [Validators.required, this._usersValidators.DateInThePast()]});
  // Benevole
  _professionFormControl: FormControl = new FormControl("",{validators: [Validators.required]});
  // Organization
  _matriculeFiscaleFormControl: FormControl = new FormControl("",{
    validators: [Validators.required , Validators.pattern(Patterns.TUNISIA_MATRICULE_FISCAL)],
    asyncValidators: [  this._usersValidators.IsUniqueMatriculeFiscale() ]
  });
  _nameFormControl: FormControl = new FormControl("",{validators: [Validators.required]});
  _formeJuridiqueFormControl: FormControl = new FormControl("",{validators: [Validators.required]});


  _streetFormControl: FormControl = new FormControl("",{validators: [Validators.required]});
  _cityFormControl: FormControl = new FormControl("",{validators: [Validators.required]});
  _zipcodeFormControl: FormControl = new FormControl("",{validators: [Validators.required, Validators.pattern(Patterns.TUNISIA_ZIPCODE)]});

  specialities: Array<string> = DOCTOR_SPECIALTIES;
  assurances: Array<string> = DOCTOR_ASSURANCES;
  formeJuridique: Array<string> = FORME_JURIDIQUE;

  hide: boolean = true;
  cardTitle: string | undefined;
  mode: DialogMode | undefined;
  user: Doctor | Benevole | Beneficier | Organization | undefined;
  userFormGroup: FormGroup;


  constructor(public dialogRef: MatDialogRef<AdminEditUsersDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {userId: number , mode: DialogMode},
              private _usersValidators: UsersValidators,
              private _fb: FormBuilder,
              private _usersService: UsersService) {
    this.mode = this.data.mode;
    this.userFormGroup = this.createFormGroup(FormPart.INIT);
  }

  ngOnInit(): void {

    console.log("==============> " + this.data.mode)
    console.log("==============> " + this.data.userId)

    if (this.mode !== undefined) {
      this.userFormGroup.reset();
      switch (this.mode) {
        case DialogMode.ADD_BENEFICIER:
          this.userFormGroup = this.createFormGroup(FormPart.BENEFICIER);
          this.initBeneficierValues();
          this.cardTitle = "Add Beneficier";
          break;
        case DialogMode.ADD_BENEVOLE:
          this.userFormGroup = this.createFormGroup(FormPart.BENEVOLE);
          this.initBenevoleValues();
          this.cardTitle = "Add Benevole";
          break;
        case DialogMode.ADD_DOCTOR:
          this.userFormGroup = this.createFormGroup(FormPart.DOCTOR);
          this.initDoctorValues();
          this.cardTitle = "Add Doctor";
          break;
        case DialogMode.ADD_ORGANIZATION:
          this.userFormGroup = this.createFormGroup(FormPart.ORGANIZATION);
          this.initOrganizationValues();
          this.cardTitle = "Add Organization";
          break;
        case DialogMode.EDIT_BENEFICIER:
          this.userFormGroup = this.createFormGroup(FormPart.BENEFICIER);
          this.cardTitle = "Edit Beneficier";
          break;
        case DialogMode.EDIT_BENEVOLE:
          this.userFormGroup = this.createFormGroup(FormPart.BENEVOLE);
          this.cardTitle = "Edit Benevole";
          break;
        case DialogMode.EDIT_DOCTOR:
          this.userFormGroup = this.createFormGroup(FormPart.DOCTOR);
          this.cardTitle = "Edit Doctor";
          break;
        case DialogMode.EDIT_ORGANIZATION:
          this.userFormGroup = this.createFormGroup(FormPart.ORGANIZATION);
          this.cardTitle = "Edit Organization";
          break;
        default:
          this.userFormGroup = this.createFormGroup(FormPart.INIT);
          break;
      }
    }

    this._usersService.getAccountById(this.data.userId)
      .subscribe(account => {
        if (account.id_compte !== undefined && account.role !== undefined) {
          this._usersService.getUserById(account.id_compte, account.role).subscribe(value => {

            if (this.mode !== undefined) {

              switch (this.mode) {
                case DialogMode.EDIT_ORGANIZATION:
                  this.userFormGroup.patchValue({
                    ...value,
                  });
                  this.userFormGroup.patchValue({
                    account: {
                      ...account,
                      password: account.password,
                      confirmPassword: account.password
                    }
                  });
                  break;
              }


            }
          });
        }
      });
  }

  createFormGroup(part: FormPart): FormGroup {
    let formGroup: FormGroup = this._fb.group({});
    switch (part) {
      case FormPart.ACCOUNT:
        formGroup.addControl("username",this._usernameFormControl);
        formGroup.addControl("password",this._passwordFormControl);
        formGroup.addControl("confirmPassword",this._confirmPassword);
        formGroup.addControl("email",this._emailFormControl);
        formGroup.addControl("phone",this._phoneFormControl);
        // formGroup.addControl("photo",this._photoFormControl);
        formGroup.addValidators(this._usersValidators.passwordIsMatched("password","confirmPassword"))
        break;
      case FormPart.ADDRESS:
        formGroup.addControl("street",this._streetFormControl);
        formGroup.addControl("city",this._cityFormControl);
        formGroup.addControl("zipcode",this._zipcodeFormControl);
        break;
      case FormPart.USER:
        formGroup.addControl("address",this.createFormGroup(FormPart.ADDRESS));
        formGroup.addControl("firstname",this._firstnameFormControl);
        formGroup.addControl("lastname",this._lastnameFormControl);
        formGroup.addControl("dateOfBirth",this._dateOfBirthFormControl);
        formGroup.addControl("gender",this._genderFormControl);
        break;
      case FormPart.DOCTOR:
        formGroup = this.createFormGroup(FormPart.USER);
        formGroup.addControl("account",this.createFormGroup(FormPart.ACCOUNT));
        formGroup.addControl("matricule",this._matriculeFormControl);
        formGroup.addControl("specialty",this._specialtyFormControl);
        formGroup.addControl("cin",this._cinFormControl);
        formGroup.addControl("assurance",this._assuranceFormControl);
        break;
      case FormPart.BENEFICIER:
        formGroup = this.createFormGroup(FormPart.USER);
        formGroup.addControl("account",this.createFormGroup(FormPart.ACCOUNT));
        formGroup.addControl("carteHandicapNumber",this._carteHandicapNumberFormControl);
        formGroup.addControl("dateExpiration",this._dateExpirationFormControl);
        break;
      case FormPart.BENEVOLE:
        formGroup = this.createFormGroup(FormPart.USER);
        formGroup.addControl("account",this.createFormGroup(FormPart.ACCOUNT));
        formGroup.addControl("profession",this._professionFormControl)
        break;
      case FormPart.ORGANIZATION:
        formGroup.addControl("account",this.createFormGroup(FormPart.ACCOUNT));
        formGroup.addControl("address",this.createFormGroup(FormPart.ADDRESS));
        formGroup.addControl("matriculeFiscale",this._matriculeFiscaleFormControl);
        formGroup.addControl("name",this._nameFormControl);
        formGroup.addControl("formeJuridique",this._formeJuridiqueFormControl);
        break;
    }

    return formGroup;
  }

  onReset() {
    this.userFormGroup.reset();
  }

  onInscription() {
    if (this.userFormGroup.valid) {
      switch (this.mode) {
        case DialogMode.ADD_DOCTOR:
          const _doctor: Doctor = {
            id_user: -1,
            account: {
              id_compte: -1,
              username: this.userFormGroup.get("account")?.get("username")?.value,
              password: this.userFormGroup.get("account")?.get("password")?.value,
              email: this.userFormGroup.get("account")?.get("email")?.value,
              phone: this.userFormGroup.get("account")?.get("phone")?.value
            },
            address: {
              street: this.userFormGroup.get("address")?.get('street')?.value,
              city: this.userFormGroup.get("address")?.get('city')?.value,
              zipcode: this.userFormGroup.get("address")?.get('zipcode')?.value,
            },
            assurance: this.userFormGroup.get("assurance")?.value,
            cin: this.userFormGroup.get("cin")?.value,
            dateOfBirth: this.userFormGroup.get("dateOfBirth")?.value,
            firstname: this.userFormGroup.get("firstname")?.value,
            gender: this.userFormGroup.get("gender")?.value,
            lastname: this.userFormGroup.get("lastname")?.value,
            matricule: this.userFormGroup.get("matricule")?.value,
            specialty: this.userFormGroup.get("specialty")?.value,
          }
          this._usersService.addDoctor(_doctor).subscribe(doctor => {
            console.log(doctor);
          },error => {
            console.log(error)
          });
          break;
        case DialogMode.ADD_BENEVOLE:
          const _benevole: Benevole = {
            id_user: -1,
            account: {
              id_compte: -1,
              username: this.userFormGroup.get("account")?.get("username")?.value,
              password: this.userFormGroup.get("account")?.get("password")?.value,
              email: this.userFormGroup.get("account")?.get("email")?.value,
              phone: this.userFormGroup.get("account")?.get("phone")?.value
            },
            address: {
              street: this.userFormGroup.get("address")?.get('street')?.value,
              city: this.userFormGroup.get("address")?.get('city')?.value,
              zipcode: this.userFormGroup.get("address")?.get('zipcode')?.value,
            },
            dateOfBirth: this.userFormGroup.get("dateOfBirth")?.value,
            firstname: this.userFormGroup.get("firstname")?.value,
            gender: this.userFormGroup.get("gender")?.value,
            lastname: this.userFormGroup.get("lastname")?.value,
            profession: this.userFormGroup.get("profession")?.value
          }
          this._usersService.addBenevole(_benevole).subscribe(benevole => {
            console.log(benevole);
          },error => {
            console.log(error)
          });
          break;
        case DialogMode.ADD_ORGANIZATION:
          const _organization: Organization = {
            id_compte: -1,
            account: {
              id_compte: -1,
              username: this.userFormGroup.get("account")?.get("username")?.value,
              password: this.userFormGroup.get("account")?.get("password")?.value,
              email: this.userFormGroup.get("account")?.get("email")?.value,
              phone: this.userFormGroup.get("account")?.get("phone")?.value
            },
            address: {
              street: this.userFormGroup.get("address")?.get('street')?.value,
              city: this.userFormGroup.get("address")?.get('city')?.value,
              zipcode: this.userFormGroup.get("address")?.get('zipcode')?.value,
            },
            name: this.userFormGroup.get("name")?.value,
            matriculeFiscale: this.userFormGroup.get("matriculeFiscale")?.value,
            formeJuridique: this.userFormGroup.get("formeJuridique")?.value,
          }
          this._usersService.addOrganization(_organization).subscribe(organization => {
            console.log(organization);
          },error => {
            console.log(error)
          });
          break;
        case DialogMode.ADD_BENEFICIER:
          const _beneficier: Beneficier = {
            id_user: -1,
            account: {
              id_compte: -1,
              username: this.userFormGroup.get("account")?.get("username")?.value,
              password: this.userFormGroup.get("account")?.get("password")?.value,
              email: this.userFormGroup.get("account")?.get("email")?.value,
              phone: this.userFormGroup.get("account")?.get("phone")?.value
            },
            address: {
              street: this.userFormGroup.get("address")?.get('street')?.value,
              city: this.userFormGroup.get("address")?.get('city')?.value,
              zipcode: this.userFormGroup.get("address")?.get('zipcode')?.value,
            },
            dateOfBirth: this.userFormGroup.get("dateOfBirth")?.value,
            firstname: this.userFormGroup.get("firstname")?.value,
            gender: this.userFormGroup.get("gender")?.value,
            lastname: this.userFormGroup.get("lastname")?.value,
            carteHandicapNumber: this.userFormGroup.get("carteHandicapNumber")?.value,
            dateExpiration: this.userFormGroup.get("dateExpiration")?.value,
          }
          this._usersService.addBeneficier(_beneficier).subscribe(beneficier => {
            console.log(beneficier);
          },error => {
            console.log(error)
          });
          break;
        case DialogMode.EDIT_ORGANIZATION:
          if (this.user != undefined && this.user.account != undefined) {
            const updatedOrganization: Organization  = {
              id_compte: -1,
              address: {
                street: this.userFormGroup.get("address")?.get('street')?.value,
                city: this.userFormGroup.get("address")?.get('city')?.value,
                zipcode: this.userFormGroup.get("address")?.get('zipcode')?.value,
              },
              formeJuridique: this.userFormGroup.get("formeJuridique")?.value,
              matriculeFiscale: this.userFormGroup.get("matriculeFiscale")?.value,
              name: this.userFormGroup.get("name")?.value,
              account: {
                id_compte: this.user.account.id_compte,
                role: this.user.account.role,
                status: this.user.account.status,
                password: this.userFormGroup.get("account")?.get('password')?.value,
                username: this.userFormGroup.get("account")?.get('username')?.value,
                phone: this.userFormGroup.get("phone")?.value,
                email: this.userFormGroup.get("email")?.value,
                photo: ""
              }
            }

            if (updatedOrganization.account != undefined) {
              this._usersService.editAccount(updatedOrganization.account).subscribe(account => {
                console.log(account);
                this._usersService.editOrganization(updatedOrganization).subscribe(organization => {
                  console.log(organization)
                });
              });
            }
          }

          break;
        case DialogMode.EDIT_DOCTOR:
          if (this.user != undefined && this.user.account != undefined) {
            const updatedDoctor: Doctor  = {
              id_user: -1,
              account: {
                id_compte: this.user.account.id_compte,
                role: this.user.account.role,
                status: this.user.account.status,
                password: this.userFormGroup.get("account")?.get('password')?.value,
                username: this.userFormGroup.get("account")?.get('username')?.value,
                phone: this.userFormGroup.get("phone")?.value,
                email: this.userFormGroup.get("email")?.value,
                photo: ""
              },
              address: {
                street: this.userFormGroup.get("address")?.get('street')?.value,
                city: this.userFormGroup.get("address")?.get('city')?.value,
                zipcode: this.userFormGroup.get("address")?.get('zipcode')?.value,
              },
              dateOfBirth: this.userFormGroup.get("dateOfBirth")?.value,
              firstname: this.userFormGroup.get("firstname")?.value,
              lastname: this.userFormGroup.get("lastname")?.value,
              gender: this.userFormGroup.get("gender")?.value,

              assurance: this.userFormGroup.get("assurance")?.value,
              cin: this.userFormGroup.get("cin")?.value,
              matricule: this.userFormGroup.get("matricule")?.value,
              specialty: this.userFormGroup.get("specialty")?.value,

            }

            if (updatedDoctor.account != undefined) {
              this._usersService.editAccount(updatedDoctor.account).subscribe(account => {
                console.log(account);
                this._usersService.editDoctor(updatedDoctor).subscribe(doctor => {
                  console.log(doctor)
                });
              });
            }
          }
          break;
        case DialogMode.EDIT_BENEVOLE:
          if (this.user != undefined && this.user.account != undefined) {
            const updatedBenevole: Benevole  = {
              id_user: -1,
              account: {
                id_compte: this.user.account.id_compte,
                role: this.user.account.role,
                status: this.user.account.status,
                password: this.userFormGroup.get("account")?.get('password')?.value,
                username: this.userFormGroup.get("account")?.get('username')?.value,
                phone: this.userFormGroup.get("phone")?.value,
                email: this.userFormGroup.get("email")?.value,
                photo: ""
              },
              address: {
                street: this.userFormGroup.get("address")?.get('street')?.value,
                city: this.userFormGroup.get("address")?.get('city')?.value,
                zipcode: this.userFormGroup.get("address")?.get('zipcode')?.value,
              },
              dateOfBirth: this.userFormGroup.get("dateOfBirth")?.value,
              firstname: this.userFormGroup.get("firstname")?.value,
              lastname: this.userFormGroup.get("lastname")?.value,
              gender: this.userFormGroup.get("gender")?.value,

              profession: this.userFormGroup.get("profession")?.value,
            }

            if (updatedBenevole.account != undefined) {
              this._usersService.editAccount(updatedBenevole.account).subscribe(account => {
                console.log(account);
                this._usersService.editBenevole(updatedBenevole).subscribe(benevole => {
                  console.log(benevole)
                });
              });
            }
          }
          break;
        case DialogMode.EDIT_BENEFICIER:
          if (this.user != undefined && this.user.account != undefined) {
            const updatedBeneficier: Beneficier  = {
              id_user:-1,
              account: {
                id_compte: this.user.account.id_compte,
                role: this.user.account.role,
                status: this.user.account.status,
                password: this.userFormGroup.get("account")?.get('password')?.value,
                username: this.userFormGroup.get("account")?.get('username')?.value,
                phone: this.userFormGroup.get("phone")?.value,
                email: this.userFormGroup.get("email")?.value,
                photo: ""
              },
              address: {
                street: this.userFormGroup.get("address")?.get('street')?.value,
                city: this.userFormGroup.get("address")?.get('city')?.value,
                zipcode: this.userFormGroup.get("address")?.get('zipcode')?.value,
              },
              dateOfBirth: this.userFormGroup.get("dateOfBirth")?.value,
              firstname: this.userFormGroup.get("firstname")?.value,
              lastname: this.userFormGroup.get("lastname")?.value,
              gender: this.userFormGroup.get("gender")?.value,

              carteHandicapNumber: this.userFormGroup.get("carteHandicapNumber")?.value,
              dateExpiration: this.userFormGroup.get("dateExpiration")?.value
            }

            if (updatedBeneficier.account != undefined) {
              this._usersService.editAccount(updatedBeneficier.account).subscribe(account => {
                console.log(account);
                this._usersService.editBeneficier(updatedBeneficier).subscribe(beneficier => {
                  console.log(beneficier)
                });
              });
            }
          }
          break;
      }
    }
  }

  private initDoctorValues() {
    this.userFormGroup.patchValue({
      firstname: "kheireddine",
      lastname: "mechergui",
      account: {
        username: "mkd_dev",
        password: "mkd.js.MKD.JS.1993",
        confirmPassword: "mkd.js.MKD.JS.1993",
        email: "kheireddine.mechegui@gmail.com",
        phone: 25222555,
      },
      dateOfBirth: new Date(1993,5,19),
      gender: GenderEnum.MALE,
      matricule: "DOC-98563200",
      specialty: DOCTOR_SPECIALTIES[5],
      cin: "07989898",
      assurance: [
        DOCTOR_ASSURANCES[0],
        DOCTOR_ASSURANCES[3]
      ],
      address: {
        street: "El Manzah 6",
        city: "Béja",
        zipcode: 8100
      }
    });
  }
  private initBenevoleValues() {
    this.userFormGroup.patchValue({
      firstname: "ahmed",
      lastname: "bouslimi",
      account: {
        username: "ahmed_bouslimi",
        password: "ahmed.BOUSLIMI.1995",
        confirmPassword: "ahmed.BOUSLIMI.1995",
        email: "ahmed.bouslimi@yahoo.fr",
        phone: 25222333,
      },
      dateOfBirth: new Date(1995,7,19),
      gender: GenderEnum.MALE,
      address: {
        street: "El Manar 6",
        city: "Tunis",
        zipcode: 4190
      },
      profession : "Ingénieur Genie Mecanique"
    });
  }
  private initBeneficierValues() {
    this.userFormGroup.patchValue({
      firstname: "ahmlem",
      lastname: "gadhgathi",
      account: {
        username: "ahmlem_gadhgathi",
        password: "gadhgathi.GADHGADHI.1990",
        confirmPassword: "gadhgathi.GADHGADHI.1990",
        email: "ahlam.1990@hotmail.com",
        phone: 58222333,
      },
      dateOfBirth: new Date(1990,4,11),
      gender: GenderEnum.FEMALE,
      address: {
        street: "El Omran 2",
        city: "Tunis",
        zipcode: 3521
      },
      carteHandicapNumber: "0012365415",
      dateExpiration: new Date(2023,4,15)
    });
  }
  private initOrganizationValues() {
    this.userFormGroup.patchValue({
      account: {
        username: "ahmlem_gadhgathi",
        password: "gadhgathi.GADHGADHI.1990",
        confirmPassword: "gadhgathi.GADHGADHI.1990",
        email: "ahlam.1990@hotmail.com",
        phone: 78222333,
      },
      address: {
        street: "El Omran 2",
        city: "Tunis",
        zipcode: 3521
      },
      name: "Assoc. Enfant",
      matriculeFiscale: "0012785/A/A/C/000",
      formeJuridique: FORME_JURIDIQUE[2]
    });
  }
}
