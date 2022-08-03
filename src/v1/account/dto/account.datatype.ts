export enum UserRoleStatus {
  ADMIN,
  MANAGER,
  MEMBER,
}

export interface IUpdateParams {
  id: string;
  name: string;
  content?: string;
  inputDate: Date;
  userRole: UserRoleStatus;
  isEnabled: boolean;
}

export interface IAccount {
  id: string;
  name: string;
  content?: string;
  inputDate: Date;
  userRole: UserRoleStatus;
  isEnabled: boolean;
}

export type IAccountList = IAccount[];
