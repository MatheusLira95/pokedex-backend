import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatePokemonsUsersMiddleTable1628280403244 implements MigrationInterface {
    name = 'CreatePokemonsUsersMiddleTable1628280403244'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemons_user" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "pokemonId" integer NOT NULL, CONSTRAINT "PK_3750d877a0e91456103bb2ab021" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pokemons_user"`);
    }

}
