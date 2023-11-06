import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonAbstract } from './common.abstract';

@Entity('users')
export class UserEntity extends CommonAbstract {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
  })
  username: string;
}
