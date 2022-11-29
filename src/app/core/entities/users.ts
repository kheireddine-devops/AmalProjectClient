import * as cluster from "cluster";

export interface CurrentUser {
  id?: number,
  role?: RoleEnum,
  photo?: string,
  fullName?: string,
  firstname?: string,
  lastname?: string
}

/************************************* Start DTO Section *************************************/

export interface AuthRequest {
  login: string,
  password: string
}

export interface AuthResponse {
  token: string | undefined,
  valid: boolean
}

export interface JWTResponse {
  iss: string,
  iat:number,
  exp: number,
  aud: string,
  sub: string

  username: string;
  role: RoleEnum;
  id: number;
  name: string;
}

interface AccountRequestDTO {}
interface UserRequestDTO {}
interface DoctorRequestDTO {}
interface BenevoleRequestDTO {}
interface BeneficierRequestDTO {}
interface OrganizationRequestDTO {}

class DTOMapping {
  mapUserToUserRequestDTO(user: User): UserRequestDTO {
    return {}
  }

  mapUserToDoctorRequestDTO(user: User): DoctorRequestDTO {
    return {}
  }

  mapUserToBenevoleRequestDTO(user: User): BenevoleRequestDTO {
    return {}
  }

  mapUserToBeneficierRequestDTO(user: User): BeneficierRequestDTO {
    return {}
  }

  mapUserToOrganizationRequestDTO(user: User): OrganizationRequestDTO {
    return {}
}
}

/************************************* End DTO Section *************************************/

/************************************* Start Entities Section *************************************/
export enum AccountStatusEnum {
  STATUS_ACTIVE_NOT_VERIFIED_PHONE_NOT_VERIFIED_MAIL="STATUS_ACTIVE_NOT_VERIFIED_PHONE_NOT_VERIFIED_MAIL",
  STATUS_ACTIVE_VERIFIED_PHONE_NOT_VERIFIED_MAIL="STATUS_ACTIVE_VERIFIED_PHONE_NOT_VERIFIED_MAIL",
  STATUS_ACTIVE_NOT_VERIFIED_PHONE_VERIFIED_MAIL="STATUS_ACTIVE_NOT_VERIFIED_PHONE_VERIFIED_MAIL",
  STATUS_ACTIVE_VERIFIED_PHONE_VERIFIED_MAIL="STATUS_ACTIVE_VERIFIED_PHONE_VERIFIED_MAIL",
  STATUS_DEACTIVATE="STATUS_DEACTIVATE",
  STATUS_BANNED="STATUS_BANNED"
}

export enum GenderEnum {
  MALE="MALE",
  FEMALE="FEMALE"
}

export enum RoleEnum {
  ADMIN='ROLE_ADMIN',
  DOCTOR='ROLE_DOCTOR',
  BENEFICIER='ROLE_BENEFICIER',
  BENEVOLE='ROLE_BENEVOLE',
  ORGANIZATION='ROLE_ORGANIZATION'
}

export interface Account {
  id?:number; // JSON-Server
  token: string; // JSON-Server
  username: string;
  password: string;
  role: RoleEnum;
  status: AccountStatusEnum;
}

export interface Address {
  street: string,
  city: string,
  zipcode: string
}

export interface User {
  id?:number; // JSON-Server
  accountId?:number; // JSON-Server
  firstname: string;
  lastname: string;
  email: string;
  dateOfBirth: Date,
  phone: string;
  gender: GenderEnum;
  address: Address;
  photo: string;
  account?: Account
}

export interface Doctor extends User {
  matricule: string;
  specialty: string;
  cin: string;
  assurance: Array<string>;
}

export interface Beneficier extends User {
  carteHandicapNumber: string;
  dateExpiration: Date;
}

export interface Benevole extends User {
  profession: string;
}

export interface Organization {
  id?:number; // JSON-Server
  accountId?:number; // JSON-Server
  matriculeFiscale: string;
  name: string;
  formeJuridique: string;
  phone: string;
  email: string;
  address: Address;
  account?: Account
  photo: string;
}

export interface Admin extends User {
}

/************************************* End Entities Section *************************************/
