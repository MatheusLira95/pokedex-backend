import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

interface Description {

}
@Entity("users")
export default class User {
    @PrimaryGeneratedColumn()
    "id": number; 
    @Column()
    "name": string; 
    @Column()
    "number": number; 
    @Column()
    "image": string; 
    @Column()
    "weight": number; 
    @Column()
    "height": number; 
    @Column()
    "baseExp": number; 
    @Column()
    "description": string; 
    @Column()
    "inMyPokemons": boolean
  }
