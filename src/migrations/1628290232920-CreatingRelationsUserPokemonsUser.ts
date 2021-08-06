import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatingRelationsUserPokemonsUser1628290232920 implements MigrationInterface {
    name = 'CreatingRelationsUserPokemonsUser1628290232920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemons_user" ADD CONSTRAINT "FK_7f6d6cdd9f90fbb001578728030" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemons_user" DROP CONSTRAINT "FK_7f6d6cdd9f90fbb001578728030"`);
    }

}
