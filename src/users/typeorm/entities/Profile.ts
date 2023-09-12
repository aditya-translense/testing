import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'user_profile'})
export class Profile{
    @PrimaryGeneratedColumn()
     id:Number

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column()
    age:Number

}