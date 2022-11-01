export interface User {
}

export interface CurrentUser {
  id?: number,
  role?: RoleEnum,
  photo?: string,
  fullName?: string,
  firstname?: string,
  lastname?: string
}

export enum RoleEnum {
  ADMIN='ADMIN',
  DOCTOR='DOCTOR',
  BENEFICIER='BENEFICIER',
  BENEVOLE='BENEVOLE',
  ORGANIZATION='ORGANIZATION'
}
