import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePaxs1645408703257 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "paxs",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "surname",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "100"
                    },
                    {
                        name: "occupation",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "birthday",
                        type: "varchar"
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name: "event_id",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_paxs_user",
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_paxs_event",
                        columnNames: ["event_id"],
                        referencedTableName: "events",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("paxs");
    }

}
