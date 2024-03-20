import { Module } from '@nestjs/common';

import { TypeOrmPlugin } from 'src/plugins/typeorm.plugin';
import { UserService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { UserController } from './users.controller';

@Module({
  imports: [TypeOrmPlugin.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
