import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserRoleStatus } from './account.datatype';

export class GetAccountRequest {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class AddAccountRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  content: string;

  @IsDate()
  inputDate: Date;

  @IsEnum(UserRoleStatus)
  userRole: UserRoleStatus;

  @IsBoolean()
  isEnabled: boolean;
}

export class UpdateAccountRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  content: string;

  @IsDate()
  inputDate: Date;

  @IsEnum(UserRoleStatus)
  userRole: UserRoleStatus;

  @IsBoolean()
  isEnabled: boolean;
}

export class DeleteAccountRequest {
  @IsString()
  @IsNotEmpty()
  id: string;
}
