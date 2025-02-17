import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity({
  name: "credentials",
})
export class Credentials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type:"varchar",
    length: 250,
    unique: true,
    nullable: false
  })
  username: string;

  @Column({
    type:"varchar",
    length: 255,
    nullable:false
  })
  password: string;

  @CreateDateColumn()
    createdAt?:Date

  @UpdateDateColumn()
    updateAT?: Date

    @OneToOne(() => User)
    user: User
}