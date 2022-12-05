import {Injectable} from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {
  Account,
  Beneficier,
  Benevole,
  Doctor,
  Organization,
  RoleEnum
} from "../entities/users";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllAccounts(): Observable<Array<any>> {
    return this.http.get<Array<any>>('/api/accounts');
  }

  getAllUsers(): Observable<Array<Account>> {
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
    return this.http.get<Array<Account>>(`/api/accounts`);


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

  existsAccountByUsername(username: string): Observable<boolean> {
    return this.http.post<boolean>(`/api/accounts/exist-by-username`, {
      username: username
    });
  }

  existsAccountByEmail(email: string): Observable<boolean> {
    return this.http.post<boolean>(`/api/accounts/exist-by-email`, {
      email: email
    });
  }

  existsAccountByPhone(phone: string): Observable<boolean> {
    return this.http.post<boolean>(`/api/accounts/exist-by-phone`, {
      phone: phone
    });
  }

  existsDoctorByCIN(cin: string): Observable<boolean> {
    return this.http.post<boolean>(`/api/doctors/exist-by-cin`,{
      cin: cin
    });
  }

  existsDoctorByMatricule(matricule: string): Observable<boolean> {
    return this.http.post<boolean>(`/api/doctors/exist-by-matricule`,{
      matricule: matricule
    });
  }

  existsOrganizationByMatriculeFiscale(matriculeFiscale: string): Observable<boolean> {
    return this.http.post<boolean>(`/api/organizations/exist-by-matricule`,{
      matricule: matriculeFiscale
    });
  }

  existsBeneficierByCarteHandicapNumber(carteHandicapNumber: number) {
    return this.http.post<boolean>(`/api/beneficiers/exist-by-catre`,{
      carteHandicapNumber: carteHandicapNumber
    });
  }

  addAccountBySpecific(account: Account): Observable<Account> {
    return this.http.post<Account>(`/api/accounts`,account);
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`/api/doctors`,doctor);
  }

  addBenevole(benevole: Benevole): Observable<Benevole>  {
    return this.http.post<Benevole>(`/api/benevoles`,benevole);
  }

  addBeneficier(beneficier: Beneficier): Observable<Beneficier> {
    return this.http.post<Beneficier>(`/api/beneficiers`,beneficier);
  }

  addOrganization(organization: Organization): Observable<Organization> {
    return this.http.post<Organization>(`/api/organizations`,organization);
  }

  getAccountById(accountId: number): Observable<Account> {
    return this.http.get<Account>(`/api/accounts/${accountId}`);
  }

  getUserById(userId: number, role: RoleEnum): Observable<Beneficier | Benevole | Doctor | Organization> {
    return this.http.get<Beneficier | Benevole | Doctor | Organization>(`/api/${this.dispatchAccountPath(role)}/${userId}/`);
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
        ch = "beneficiers";
        break;
      case RoleEnum.ORGANIZATION:
        ch = "organizations";
        break;
    }
    return ch;
  }

  editAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(`/api/accounts/${account.id_compte}`,account);
  }

  editOrganization(updatedOrganization: Organization): Observable<Organization> {
    updatedOrganization.account = undefined;
    return this.http.put<Organization>(`/api/organizations/${updatedOrganization.id_compte}`,updatedOrganization);
  }

  editDoctor(updatedDoctor: Doctor): Observable<Doctor> {
    updatedDoctor.account = undefined;
    return this.http.put<Doctor>(`/api/doctors/${updatedDoctor.id_user}`,updatedDoctor);
  }

  editBenevole(updatedBenevole: Benevole): Observable<Benevole> {
    updatedBenevole.account = undefined;
    return this.http.put<Benevole>(`/api/benevoles/${updatedBenevole.id_user}`,updatedBenevole);
  }

  editBeneficier(updatedBeneficier: Beneficier): Observable<Beneficier> {
    updatedBeneficier.account = undefined;
    return this.http.put<Beneficier>(`/api/beneficiaries/${updatedBeneficier.id_user}`,updatedBeneficier);
  }
}
