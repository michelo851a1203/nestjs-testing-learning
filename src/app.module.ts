import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { V1Module } from './v1/v1.module';
const currentRoute: Routes = [
  {
    path: '/v1',
    module: V1Module,
  },
];

@Module({
  imports: [RouterModule.forRoutes(currentRoute), V1Module],
})
export class AppModule {}
