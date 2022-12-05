import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Account, Beneficier, Benevole, Doctor, GenderEnum, Organization, RoleEnum} from "../../core/entities/users";
import {UsersValidators} from "../../core/validators/users-validators";
import {UsersService} from "../../core/services/users.service";

export class Patterns {
  static USERNAME: RegExp = /^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  static FIRSTNAME: RegExp = /^[a-zA-Z]{2,25}$/;
  static LASTNAME: RegExp = /^[a-zA-Z]{2,25}$/;
  static TUNISIA_PHONE_PHONE: RegExp = /^[9527]{1}[0-9]{7}$/;
  static EMAIL: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/;

  // static PASSWORD_2_LEVEL_1: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

  /* Minimum eight and maximum 64 characters, at least one letter and one number */
  static PASSWORD_JS_LEVEL_1: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,64}$/
  /* Minimum eight and maximum 64 characters, at least one letter, one number and one special character */
  static PASSWORD_JS_LEVEL_2: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,64}$/
  /* Minimum eight and maximum 64 characters, at least one uppercase letter, one lowercase letter and one number */
  static PASSWORD_JS_LEVEL_3: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,64}$/
  /* Minimum eight and maximum 64 characters, at least one uppercase letter, one lowercase letter, one number and one special character */
  static PASSWORD_JS_LEVEL_4: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,64}$/

  /* Minimum eight characters, at least one letter and one number */
  static PASSWORD_LEVEL_1: RegExp = /^(?=.*[A-Za-z])(?=.*d)[A-Za-z]{8,}$/;
  /* Minimum eight characters, at least one letter, one number and one special character */
  static PASSWORD_LEVEL_2: RegExp = /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/;
  /* Minimum eight characters, at least one uppercase letter, one lowercase letter and one number */
  static PASSWORD_LEVEL_3: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/;
  /* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character */
  static PASSWORD_LEVEL_4: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/;

  static TUNISIA_ZIPCODE: RegExp = /^[0-9]{4}$/;
  static TUNISIA_DOCTOR_MATRICULE: RegExp = /^DOC\-[0-9]{8}$/;
  static TUNISIA_CIN: RegExp = /^[0-9]{8}$/;
  static TUNISIA_CARTE_HANDICAP_NUMBER: RegExp = /^[0-9]{10}$/;
  // XXXXXXX/Y/T/C/XXX
  // La cle de controle : Any Letter exclude ==> I O U
  // Code TVA : A B D P N
  // Code Catégorie : C E M N P
  // IF Code Catégorie != E THEN 001-999 ELSE 000

  static TUNISIA_MATRICULE_FISCAL: RegExp = /^[0-9]{7}\/[AZERTYPQSDFGHJKLMWXCVBN]{1}\/[ABDPN]{1}\/([CMNP]{1}\/[0]{3}|[E]{1}\/[0-9]{3})$/;
}

@Component({
  selector: 'app-guest-inscription',
  templateUrl: './guest-inscription.component.html',
  styleUrls: ['./guest-inscription.component.css']
})
export class GuestInscriptionComponent implements OnInit {

  // Account
  _usernameFormControl: FormControl = new FormControl("",{
    validators: [Validators.required, Validators.pattern(Patterns.USERNAME)],
    asyncValidators: [this._usersValidators.IsUniqueUsername()],
    updateOn: "change"
  });
  _passwordFormControl: FormControl = new FormControl("",[Validators.required, Validators.pattern(Patterns.PASSWORD_JS_LEVEL_4)],[]);
  _confirmPassword: FormControl = new FormControl("",[Validators.required],[]);
  // User
  _emailFormControl: FormControl = new FormControl("",{
    validators: [Validators.required, Validators.email /*, Validators.pattern(Patterns.EMAIL)*/],
    asyncValidators: [this._usersValidators.IsUniqueEmail()],
    updateOn: "change"
  });
  _phoneFormControl: FormControl = new FormControl("",{
    validators: [Validators.required,Validators.pattern(Patterns.TUNISIA_PHONE_PHONE)],
    asyncValidators: [
      this._usersValidators.IsUniquePhone()
    ],
    updateOn: "change"
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
    asyncValidators: [this._usersValidators.IsUniqueCIN()],
    updateOn: "change"
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


  inscriptionIcon: string = "";
  inscriptionImage: string = "";
  specialities: Array<string> = DOCTOR_SPECIALTIES;
  assurances: Array<string> = DOCTOR_ASSURANCES;
  formeJuridique: Array<string> = FORME_JURIDIQUE;

  @Input("MODE-DIALOG") mode: InscriptionModeEnum | undefined;
  user: Doctor | Beneficier | Benevole | Organization | undefined;
  userFormGroup: FormGroup;
  hide: boolean = true;
  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _usersValidators: UsersValidators,
              private _userService: UsersService) {

    this.userFormGroup = this.createFormGroup(FormPart.INIT);
  }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(value => {

      if(value.has("type")) {
        if (Object.values(InscriptionModeEnum).includes(value.get("type") as InscriptionModeEnum)) {
          this.mode = value.get("type") as InscriptionModeEnum;
        }
      }
    });

    if(this.mode !== undefined) {
      this.userFormGroup.reset();
      switch (this.mode) {
        case InscriptionModeEnum.benefecier:
          this.userFormGroup = this.createFormGroup(FormPart.BENEFICIER);
          this.inscriptionIcon = "assets/img/volunteer.png";
          this.inscriptionImage = "assets/images/template/piclogin.svg";
          this.initBeneficierValues();
          break;
        case InscriptionModeEnum.benevole:
          this.userFormGroup = this.createFormGroup(FormPart.BENEVOLE);
          this.inscriptionIcon = "assets/img/donation.png";
          this.inscriptionImage = "assets/images/template/piclogin.svg";
          this.initBenevoleValues();
          break;
        case InscriptionModeEnum.doctor:
          this.userFormGroup = this.createFormGroup(FormPart.DOCTOR);
          this.inscriptionIcon = "assets/img/medical-team.png";
          this.inscriptionImage = "assets/images/template/piclogin.svg";
          this.initDoctorValues();
          break;
        case InscriptionModeEnum.organization:
          this.userFormGroup = this.createFormGroup(FormPart.ORGANIZATION);
          this.inscriptionIcon = "assets/img/corporation.png";
          this.inscriptionImage = "assets/images/template/piclogin.svg";
          this.initOrganizationValues();
          break;
        default:
          this.userFormGroup = this.createFormGroup(FormPart.INIT);
          break;
      }
    }
  }

  onInscription() {

    if (this.userFormGroup.valid) {
      switch (this.mode) {
        case InscriptionModeEnum.doctor:
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
          this._userService.addDoctor(_doctor).subscribe(doctor => {
            console.log(doctor);
            this._router.navigateByUrl("/FrontOffice/login");
          },error => {
            console.log(error)
          });
          break;
        case InscriptionModeEnum.benevole:
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
          this._userService.addBenevole(_benevole).subscribe(benevole => {
            console.log(benevole);
            this._router.navigateByUrl("/FrontOffice/login");
          },error => {
            console.log(error)
          });
          break;
        case InscriptionModeEnum.organization:
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
          this._userService.addOrganization(_organization).subscribe(organization => {
            console.log(organization);
            this._router.navigateByUrl("/FrontOffice/login");
          },error => {
            console.log(error)
          });
          break;
        case InscriptionModeEnum.benefecier:
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
          this._userService.addBeneficier(_beneficier).subscribe(beneficier => {
            console.log(beneficier);
            this._router.navigateByUrl("/FrontOffice/login");
          },error => {
            console.log(error)
          });
          break;
      }
    }

  }

  onReset() {
    this.userFormGroup.reset();
  }

  private initDoctorValues() {
    this.userFormGroup.patchValue({
      firstname: "kheireddine",
      lastname: "mechergui",
      account: {
        username: "mkd_dev",
        password: "mkd.MKD.java.JAVA.1993",
        confirmPassword: "mkd.MKD.java.JAVA.1993",
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
        password: "mkd.MKD.java.JAVA.1993",
        confirmPassword: "mkd.MKD.java.JAVA.1993",
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
        password: "mkd.MKD.java.JAVA.1993",
        confirmPassword: "mkd.MKD.java.JAVA.1993",
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

  createFormGroup(part: FormPart): FormGroup {
    let formGroup: FormGroup = this._fb.group({});
    switch (part) {
      case FormPart.ACCOUNT:
        formGroup.addControl("username",this._usernameFormControl);
        formGroup.addControl("password",this._passwordFormControl);
        formGroup.addControl("confirmPassword",this._confirmPassword);
        formGroup.addControl("email",this._emailFormControl);
        formGroup.addControl("phone",this._phoneFormControl);
        /*formGroup.addControl("photo",this._photoFormControl);*/
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
}

export enum InscriptionModeEnum {
  doctor="doctor",
  organization="organization",
  benefecier="benefecier",
  benevole="benevole"
}

export const DOCTOR_SPECIALTIES: Array<string> = [
  "Cardiologue  (Cœur)",
  "Chirurgien Esthétique",
  "Chirurgien Orthopédiste Traumatologue",
  "Dentiste  (Dents)",
  "Dermatologue  (Peau)",
  "Endocrinologue Diabétologue",
  "Gastro-entérologue",
  "G'énéraliste",
  "Gynécologue Obstétricien",
  "Interniste",
  "Laboratoire d'analyses de biologie médicale",
  "Néphrologue",
  "Neurologue  (Cerveau et Nerfs)",
  "Nutritionniste",
  "Ophtalmologue  (Yeux)",
  "Oto-Rhino-Laryngologiste (ORL)  (Oreille nez gorge)",
  "Pédiatre  (Enfant)",
  "Pneumologue",
  "Psychiatre  (Troubles mentaux)",
  "Psychothérapeute",
  "Radiologue",
  "Rhumatologue",
  "Sexologue",
  "Urologue"
];

export const DOCTOR_ASSURANCES: Array<string> = [
  "CNAM",
  "STAR",
  "COMAR",
  "GAT",
  "MAGHREBIA",
  "ASTREE",
  "Assurances BIAT",
  "MAE",
  "BH Assurance",
  "CTAMA",
  "LLOYD ASSURANCES",
  "AMI",
  "ATTIJARI ASSURANCE",
  "CARTE Assurances",
  "MAGHREBIA Vie",
  "ZITOUNA TAKAFUL",
  "ASSURANCES HAYETT",
  "CARTE Vie",
  "EL AMANA TAKAFUL",
  "GAT Vie",
  "AT-TAKAFULIA",
  "COTUNACE",
  "LLOYD Vie",
  "ASSURANCES UIB",
  "OTHERs"
];

export const FORME_JURIDIQUE: Array<string> = [
  "Entreprise Individuelle",
  "Société en nom collectif",
  "Société en commandite simple",
  "Société en participation",
  "Société à responsabilité limitée (SARL)",
  "Société unipersonnelle à responsabilité limitée (SUARL)",
  "Société anonyme (SA)",
  "Société en commandite par actions (SCA)"
];

export enum FormPart {
  INIT="INIT",
  ACCOUNT="ACCOUNT",
  ADDRESS="ADDRESS",
  USER="USER",
  DOCTOR="DOCTOR",
  BENEFICIER="BENEFICIER",
  BENEVOLE="BENEVOLE",
  ORGANIZATION="ORGANIZATION"
}
