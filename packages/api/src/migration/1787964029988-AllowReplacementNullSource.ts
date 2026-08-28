import { MigrationInterface, QueryRunner } from "typeorm";

export class AllowReplacementNullSource1787964029988 implements MigrationInterface {
    name = 'AllowReplacementNullSource1787964029988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."post_replacements" ALTER COLUMN "source" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."post_replacements" ALTER COLUMN "source" SET NOT NULL`);
    }

}
