import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import MyPokemons from "./MyPokemons";

interface Description {}
@Entity("pokemon")
export default class Pokemon {
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

  @OneToMany(() => MyPokemons, (myPokemon) => myPokemon.user)
  myPokemon: MyPokemons[];
}
