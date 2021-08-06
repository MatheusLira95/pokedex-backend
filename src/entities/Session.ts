import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("sessions")
export default class Sessions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  token: string;
}
