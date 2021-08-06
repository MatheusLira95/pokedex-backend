import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("pokemons_user")
export default class MyPokemons {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  pokemonId: number;
}
