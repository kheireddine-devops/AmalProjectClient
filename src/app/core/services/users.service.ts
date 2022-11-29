import {Injectable} from '@angular/core';
import {flatMap, map, merge, Observable, of, reduce, toArray} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {
  Account,
  AccountStatusEnum,
  Admin,
  Beneficier,
  Benevole,
  Doctor,
  Organization,
  RoleEnum,
  User
} from "../entities/users";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Array<GenericUser<Beneficier | Benevole | Doctor | Organization | Admin>>> {
    // let doctors = this.http.get<Array<GenericUser<Doctor>>>(`/api/doctors`)
    //   .pipe<any>(flatMap(value => value))
    //   .pipe<any>(map(value => ({"role": RoleEnum.DOCTOR, "data": value})));
    //
    // let beneficiaries = this.http.get<Array<Beneficier>>(`/api/beneficiaries`)
    //   .pipe<any>(flatMap(value => value))
    //   .pipe<any>(map(value => ({"role": RoleEnum.BENEFICIER, "data": value})));
    //
    // let benevoles = this.http.get<Array<Benevole>>(`/api/benevoles`)
    //   .pipe<any>(flatMap(value => value))
    //   .pipe<any>(map(value => ({"role": RoleEnum.BENEVOLE, "data": value})));
    //
    // let organizations = this.http.get<Array<Organization>>(`/api/organizations`)
    //   .pipe<any>(flatMap(value => value))
    //   .pipe<any>(map(value => ({"role": RoleEnum.ORGANIZATION, "data": value})));

    // let doctors = this.http.get<Array<GenericUser<Doctor>>>(`/api/doctors`);
    // let beneficiaries = this.http.get<Array<Beneficier>>(`/api/beneficiaries`);
    // let benevoles = this.http.get<Array<Benevole>>(`/api/benevoles`);
    // let organizations = this.http.get<Array<Organization>>(`/api/organizations`);
    return this.http.get<Array<GenericUser<Beneficier | Benevole | Doctor | Organization | Admin>>>(`http://localhost:3000/accounts?_embed=doctors&_embed=organizations&_embed=admin&_embed=benevoles&_embed=beneficiaries`)
      .pipe<any>( flatMap(value => value) )
      .pipe<any>(map(value => this.mapToGenericUser(value)))
      .pipe( toArray() );


    // return combineAll(doctors,beneficiaries,benevoles,organizations)
    //   .pipe(flatMap(value => value))
    //   .pipe(map(value => ({"role": RoleEnum.ORGANIZATION, "data": value})))
    //   .pipe(tap(x => console.log(x)))
    //   .pipe<any>( reduce((a,b) => a.concat(b)) );


    // organizations.forEach(value => {
    //   console.log(value)
    // })
    //
    // merge(doctors,beneficiaries,benevoles,organizations)
    //   .pipe(map(value => {
    //
    //   }))
    //   .subscribe(value => {
    //   console.log(value)
    // })
  }

  existsUserByUsername(username: string): Observable<boolean> {
    return this.http.post<boolean>(`/api/users/exist-by-username`, {
      username: username
    });
  }

  mapToGenericUser(value: any) {
    switch (value.role as RoleEnum) {
      case RoleEnum.DOCTOR:
        return {type: value.role, data: value["doctors"][0]}
      case RoleEnum.ORGANIZATION:
        return {type: value.role, data: value["organizations"][0]}
      case RoleEnum.BENEFICIER:
        return {type: value.role, data: value["beneficiaries"][0]}
      case RoleEnum.BENEVOLE:
        return {type: value.role, data: value["benevoles"][0]}
      case RoleEnum.ADMIN:
        return {type: value.role, data: value["admin"][0]}
    }
    return {type: undefined, data: undefined}
  }

  existsUserByEmail(email: string): Observable<boolean> {

    let admin = this.http.get<Array<Organization>>(`/api/admin?email=${email}`);
    let doctors = this.http.get<Array<GenericUser<Doctor>>>(`/api/doctors?email=${email}`);
    let beneficiaries = this.http.get<Array<Beneficier>>(`/api/beneficiaries?email=${email}`);
    let benevoles = this.http.get<Array<Benevole>>(`/api/benevoles?email=${email}`);
    let organizations = this.http.get<Array<Organization>>(`/api/organizations?email=${email}`);

    return merge(admin,doctors,beneficiaries,benevoles,organizations)
      .pipe<any>( reduce((a,b) => a.concat(b)))
      .pipe( map((value) => {
        console.log(value)
        return ((value as Array<Admin | Doctor | Beneficier | Benevole | Organization>).length > 0);
      }));
  }

  existsUserByPhone(phone: string): Observable<boolean> {
    let admin = this.http.get<Array<Organization>>(`/api/admin?phone=${phone}`);
    let doctors = this.http.get<Array<GenericUser<Doctor>>>(`/api/doctors?phone=${phone}`);
    let beneficiaries = this.http.get<Array<Beneficier>>(`/api/beneficiaries?phone=${phone}`);
    let benevoles = this.http.get<Array<Benevole>>(`/api/benevoles?phone=${phone}`);
    let organizations = this.http.get<Array<Organization>>(`/api/organizations?phone=${phone}`);

    return merge(admin,doctors,beneficiaries,benevoles,organizations)
      .pipe<any>( reduce((a,b) => a.concat(b)))
      .pipe( map((value) => {
        console.log(value)
        return ((value as Array<Admin | Doctor | Beneficier | Benevole | Organization>).length > 0);
      }));
  }

  existsDoctorByMatricule(matricule: string): Observable<boolean> {
    return this.http.get<boolean>(`/api/doctors?matricule=${matricule}`)
      .pipe( map((value: any) => {
        return ((value as Array<Doctor>).length > 0);
      }));
  }
// /api/organizations?matriculeFiscale=0012785/A/A/C/000
// /api/organizations?matriculeFiscale=:matriculeFiscale
  existsOrganizationByMatriculeFiscale(matriculeFiscale: string): Observable<boolean> {
    return this.http.get<boolean>(`http://localhost:3000/organizations?matriculeFiscale=${matriculeFiscale}`)
      .pipe( map((value: any) => {
        console.log(value)
        return ((value as Array<Organization>).length > 0);
      }));
  }

  existsDoctorByCIN(cin: string): Observable<boolean> {
    return this.http.get<boolean>(`/api/doctors?cin=${cin}`)
      .pipe( map((value: any) => {
        return ((value as Array<Doctor>).length > 0);
      }));
  }

  existsBeneficierByCarteHandicapNumber(carteHandicapNumber: number) {
    return this.http.get<boolean>(`/api/beneficiaries?carteHandicapNumber=${carteHandicapNumber}`)
      .pipe( map((value: any) => {
        return ((value as Array<Beneficier>).length > 0);
      }));
  }

  addAccount(account: Account,role: RoleEnum): Observable<Account> {
    account.role = role;
    account.status = AccountStatusEnum.STATUS_ACTIVE_NOT_VERIFIED_PHONE_VERIFIED_MAIL;
    switch (role) {
      case RoleEnum.DOCTOR:
        account.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBbWFsQXBwbGljYXRpb24iLCJpYXQiOjE2NjczMjA5MDUsImV4cCI6MTY5ODg1ODA2MywiYXVkIjoid3d3LmFtYWwtYXBwbGljYXRpb24uY29tIiwic3ViIjoia2hlaXJlZGRpbmUubWVjaGVyZ3VpQGVzcHJpdC50biIsInVzZXJuYW1lIjoiZGV2LW9wcyIsInJvbGUiOiJET0NUT1IiLCJpZCI6IjIiLCJuYW1lIjoia2hlaXJlZGRpbmUgbWVjaGVyZ3VpIn0.7AatI7nq7iK83zn5U5doSacG2-UteI6YjabjlhJhEV0";
        break;
      case RoleEnum.BENEFICIER:
        account.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBbWFsQXBwbGljYXRpb24iLCJpYXQiOjE2NjczMjA5MDUsImV4cCI6MTY5ODg1ODA2MywiYXVkIjoid3d3LmFtYWwtYXBwbGljYXRpb24uY29tIiwic3ViIjoia2hlaXJlZGRpbmUubWVjaGVyZ3VpQGVzcHJpdC50biIsInVzZXJuYW1lIjoiZGV2LW9wcyIsInJvbGUiOiJCRU5FRklDSUVSIiwiaWQiOiI1IiwibmFtZSI6ImtoZWlyZWRkaW5lIG1lY2hlcmd1aSJ9.yyX0zlC6wF_sVSxcSaztBz1xTpNpxpEPhz3KIEpWpmw";
        break;
      case RoleEnum.BENEVOLE:
        account.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBbWFsQXBwbGljYXRpb24iLCJpYXQiOjE2NjczMjA5MDUsImV4cCI6MTY5ODg1ODA2MywiYXVkIjoid3d3LmFtYWwtYXBwbGljYXRpb24uY29tIiwic3ViIjoia2hlaXJlZGRpbmUubWVjaGVyZ3VpQGVzcHJpdC50biIsInVzZXJuYW1lIjoiZGV2LW9wcyIsInJvbGUiOiJCRU5FVk9MRSIsImlkIjoiNCIsIm5hbWUiOiJraGVpcmVkZGluZSBtZWNoZXJndWkifQ.vFK_aoziZOzxQcfFGef2i6QxUMFxonMY-jb8ikVbMLw";
        break;
      case RoleEnum.ORGANIZATION:
        account.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBbWFsQXBwbGljYXRpb24iLCJpYXQiOjE2NjczMjA5MDUsImV4cCI6MTY5ODg1ODA2MywiYXVkIjoid3d3LmFtYWwtYXBwbGljYXRpb24uY29tIiwic3ViIjoia2hlaXJlZGRpbmUubWVjaGVyZ3VpQGVzcHJpdC50biIsInVzZXJuYW1lIjoiZGV2LW9wcyIsInJvbGUiOiJPUkdBTklaQVRJT04iLCJpZCI6IjMiLCJuYW1lIjoia2hlaXJlZGRpbmUgbWVjaGVyZ3VpIn0.XsWAjzv1xdoUgWb6ri6vRBETJ5sYSscHKsA_UEqQ0zk";
        break;
    }
    return this.http.post<Account>(`/api/accounts`,account);
  }

  addAccountBySpecific(account: Account): Observable<Account> {
    return this.http.post<Account>(`/api/accounts`,account);
  }

  addDoctor(doctor: Doctor, accountId: number): Observable<Doctor> {
    doctor.account = undefined;
    doctor.id = accountId;
    doctor.accountId = accountId;
    return this.http.post<Doctor>(`/api/doctors`,doctor);
  }

  addBenevole(benevole: Benevole, accountId: number): Observable<Benevole>  {
    benevole.account = undefined;
    benevole.id = accountId;
    benevole.accountId = accountId;
    return this.http.post<Benevole>(`/api/benevoles`,benevole);
  }

  addBeneficier(beneficier: Beneficier, accountId: number): Observable<Beneficier> {
    beneficier.account = undefined;
    beneficier.id = accountId;
    beneficier.accountId = accountId;
    return this.http.post<Beneficier>(`/api/beneficiaries`,beneficier);
  }

  addOrganization(organization: Organization, accountId: number): Observable<Organization> {
    organization.account = undefined;
    organization.id = accountId;
    organization.accountId = accountId;
    return this.http.post<Organization>(`/api/organizations`,organization);
  }

  getAccountById(accountId: number): Observable<Account> {
    return this.http.get<Account>(`/api/accounts/${accountId}`);
  }

  getUserById(userId: number, role: RoleEnum): Observable<Beneficier | Benevole | Doctor | Organization> {

    return this.http.get<Beneficier | Benevole | Doctor | Organization>(`/api/accounts/${userId}/${this.dispatchAccountPath(role)}`)
      .pipe( map((value: any) => (value[0])));
  }

  deleteAccountById(accountId: number) {
    return this.http.delete(`/api/accounts/${accountId}`);
  }

  dispatchAccountPath(role: RoleEnum): string {
    let ch: string = "";
    switch (role) {
      case RoleEnum.DOCTOR:
        ch = "doctors";
        break;
      case RoleEnum.BENEVOLE:
        ch = "benevoles";
        break;
      case RoleEnum.BENEFICIER:
        ch = "beneficiaries";
        break;
      case RoleEnum.ORGANIZATION:
        ch = "organizations";
        break;
    }
    return ch;
  }

  editAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(`/api/accounts/${account.id}`,account);
  }

  editOrganization(updatedOrganization: Organization): Observable<Organization> {
    updatedOrganization.account = undefined;
    return this.http.put<Organization>(`/api/organizations/${updatedOrganization.id}`,updatedOrganization);
  }

  editDoctor(updatedDoctor: Doctor): Observable<Doctor> {
    updatedDoctor.account = undefined;
    return this.http.put<Doctor>(`/api/doctors/${updatedDoctor.id}`,updatedDoctor);
  }

  editBenevole(updatedBenevole: Benevole): Observable<Benevole> {
    updatedBenevole.account = undefined;
    return this.http.put<Benevole>(`/api/benevoles/${updatedBenevole.id}`,updatedBenevole);
  }

  editBeneficier(updatedBeneficier: Beneficier): Observable<Beneficier> {
    updatedBeneficier.account = undefined;
    return this.http.put<Beneficier>(`/api/beneficiaries/${updatedBeneficier.id}`,updatedBeneficier);
  }
}


export interface GenericUser<T> {
  type: RoleEnum,
  data: T
}
