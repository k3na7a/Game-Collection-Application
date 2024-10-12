import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

import { AvatarEntity } from 'src/app/modules/users/entities/avatar.entity';
import { ProfileEntity } from 'src/app/modules/users/entities/profile.entity';
import { UserEntity } from 'src/app/modules/users/entities/user.entity';
import { PlatformEntity } from 'src/app/modules/games/entities/platform.entity';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'demo_nest_api',
  entities: [UserEntity, ProfileEntity, AvatarEntity, PlatformEntity],
  synchronize: true,
};

export class TypeOrmPlugin {
  public static forRoot = TypeOrmModule.forRoot(config);
  public static forFeature = (entities: EntityClassOrSchema[]) =>
    TypeOrmModule.forFeature(entities);
}
