import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { IUpdateParams } from './dto/account.datatype';
import {
  AddAccountRequest,
  GetAccountRequest,
  UpdateAccountRequest,
} from './dto/account.dto';

@Controller('account')
export class AccountController {
  constructor(
    @Inject(AccountService)
    private accountService: AccountService,
  ) {}

  @Get('/')
  getAccountListRoute() {
    return this.accountService.getAccountList();
  }

  @Get('/:id')
  getAccountRoute(@Param() accountRequest: GetAccountRequest) {
    return this.accountService.getAccountDetail(accountRequest.id);
  }

  @Post('/')
  addAccountRoute(@Body() addAccountRequest: AddAccountRequest) {
    return this.accountService.addAccount(addAccountRequest);
  }

  @Patch('/')
  updateAccountRoute(
    @Param('id') id: string,
    @Body() updateAccountRequest: UpdateAccountRequest,
  ) {
    const params: IUpdateParams = {
      id,
      ...updateAccountRequest,
    };
    return this.accountService.updateAccount(params);
  }
  @Delete('/:id')
  deleteAccountRoute(@Param('id') id: string) {
    return this.accountService.deleteAccount(id);
  }
}
