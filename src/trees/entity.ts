import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany} from 'typeorm'
import { MinLength, IsString } from 'class-validator';
import User from '../users/entity'



@Entity()
export default class Tree extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(2)
  @Column('text')
  name: string

  @IsString()
  @MinLength(2)
  @Column('text')
  description: string

  
  @Column('integer')
  price: number

  @IsString()
  @MinLength(2)
  @Column('text')
  pictureURL: string

  @ManyToMany(_ => User, user => user.trees, {lazy: true})
  users: User[] | null

  
}