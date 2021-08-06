import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import MyPokemons from "./MyPokemons";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => MyPokemons, (myPokemon) => myPokemon.user)
  myPokemon: MyPokemons[];
}
