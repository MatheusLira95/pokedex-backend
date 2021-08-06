import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import Pokemon from "../entities/Pokemon";
import User from "../entities/User";

@Entity("pokemons_user")
export default class MyPokemons {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  pokemonId: number;

  @ManyToOne(() => User, (user) => user.myPokemon)
  user: User;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.myPokemon)
  pokemon: Pokemon;
}
