import { Injectable } from '@nestjs/common';
import {
  IAccount,
  IAccountList,
  IUpdateParams,
  UserRoleStatus,
} from './dto/account.datatype';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class AccountService {
  async getAccountList(): Promise<IAccountList> {
    const result: IAccountList = [];
    for (let index = 0; index < 20; index++) {
      const testRandom = Math.random().toString(16).slice(2);
      const perspectiveElement: IAccount = {
        id: uuidV4(),
        name: `test_${testRandom}`,
        content: 'test content',
        inputDate: new Date(),
        userRole: this.buildRandomMember(),
        isEnabled: true,
      };
      result.push(perspectiveElement);
    }

    return result;
  }

  async getAccountDetail(id: string) {
    const testRandom = Math.random().toString(16).slice(2);

    const result: IAccount = {
      id,
      name: `test_${testRandom}`,
      content: 'test content',
      inputDate: new Date(),
      userRole: this.buildRandomMember(),
      isEnabled: true,
    };
    return result;
  }

  async addAccount(addAccountRequest: AddAccountRequest): Promise<boolean> {
    return true;
  }

  async updateAccount(updateAccountParams: IUpdateParams) {
    return true;
  }

  async deleteAccount(id: string) {
    return true;
  }

  private buildRandomMember() {
    const roleNameList = Object.keys(UserRoleStatus).filter((roleItem) =>
      Number.isNaN(roleItem),
    );
    const roleNameListLength = roleNameList.length;
    const currentRandom = Math.floor(Math.random() * 10) % roleNameListLength;
    return currentRandom;
  }
}
