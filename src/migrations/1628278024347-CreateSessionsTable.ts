import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSessionsTable1628278024347 implements MigrationInterface {
    name = 'CreateSessionsTable1628278024347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sessions" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "token" character varying NOT NULL, CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pokemon" DROP COLUMN "inMyPokemons"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon" ADD "inMyPokemons" boolean NOT NULL`);
        await queryRunner.query(`DROP TABLE "sessions"`);
    }

}
